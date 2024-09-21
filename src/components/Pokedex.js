import PokeCard from "./PokeCard";

function Pokedex(props) {
    return (
        <div className="pokemon-container">
            {props.data.map((pokemon) => {
                return <PokeCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.types.map((type) => type.type.name).join(', ')}
                    types={pokemon.types}
                    image={pokemon.sprites.other["official-artwork"].front_default}
                    onSelectPokemon={props.onSelectPokemon} />;
            })}
        </div>
    );
}

export default Pokedex;