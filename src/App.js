import './App.css';
import { useEffect, useState } from 'react'
import Header from './components/Header';
import Pagination from './components/Pagination';
import Pokedex from './components/Pokedex';
import Search from './components/Search';
import PokeDescription from './components/PokeDescription';

const generations = [
	["Kanto", 1, 151],
	["Johto", 152, 251],
	["Hoenn", 252, 386],
	["Sinnoh", 387, 483],
	["Unova", 494, 649],
  ["Kalos", 650, 721],
  ["Alola", 722, 809],
  ["Galar", 810, 905],
  ["Paldea", 906, 1010]
];

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {

    async function fetchPokemon(index) {
      return await (await fetch('https://pokeapi.co/api/v2/pokemon/' + index)).json();
    }

    async function fetchPokemons() {
      let pokemonPromises = [];
      for (let i = generations[index][1]; i <= generations[index][2]; i++) {
        pokemonPromises.push(fetchPokemon(i));
      }
      const pokemonResponses = await Promise.allSettled(pokemonPromises);
      setPokemonArray(pokemonResponses.map((promise) => promise.value));
    }

    fetchPokemons();

  }, [index]);

  function handleSelectPokemon(pokemonData) {
    setSelectedPokemon(pokemonData);
  }

  function handleNextPage() {
    setIndex((prevIndex) => prevIndex < 8 ? prevIndex + 1 : prevIndex);
  }

  function handlePreviousPage() {
    setIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : prevIndex);
  }

  function handleSetPage(index) {
    setIndex(index);
  }
  

  return (
    <div className='pokebody'>
      <Header title={generations[index][0]} />
      <Pagination index={index} onSetPage={handleSetPage} onNextPage={handleNextPage} onPreviosPage={handlePreviousPage} />
      <Search />
      <PokeDescription selectedPokemon={selectedPokemon} onSelectPokemon={handleSelectPokemon} />
      <Pokedex data={pokemonArray} onSelectPokemon={handleSelectPokemon} />
    </div>
  );
}

export default App;
