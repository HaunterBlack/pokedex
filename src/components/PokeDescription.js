import { createPortal } from "react-dom";
import { useRef } from "react";
const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

function PokeDescription(props) {
    const modalRef = useRef();
    const pokemon = props?.selectedPokemon;
    if (props.selectedPokemon) {
        modalRef.current.showModal();
    }
    function handleGetBack() {
        props.onSelectPokemon(null);
        modalRef.current.close();
    }
    return createPortal
        (<dialog ref={modalRef}>
            {props.selectedPokemon &&
                <div className="pokemon-card" style={{ background: `linear-gradient(150deg, ${colors[pokemon.types[0].type.name]} 50%, ${pokemon.types.length > 1 ? colors[pokemon.types[1].type.name] : colors[pokemon.types[0].type.name]} 50%)` }}>
                    <img className="pokemon-image" src={pokemon.image} alt="" />
                    <p className="poke-id">{pokemon.id}</p>
                    <p className="poke-name">{pokemon.name}</p>
                    <p className="poke-type">{pokemon.type}</p>
                    <button className="poke-type">Catch</button>
                    <button className="poke-type" onClick={handleGetBack}>Go Back</button>
                </div>}
        </dialog>
            , document.getElementById('pokemodal')
        );
}

export default PokeDescription;