const colors = {
	grass: "#d2f2c2",
	poison: "#f7cdf7",
	fire: "#ffd1b5",
	flying: "#eae3ff",
	water: "#c2f3ff",
	bug: "#e0e8a2",
	normal: "#e6e6c3",
	electric: "#fff1ba",
	ground: "#e0ccb1",
	fighting: "#fcada9",
	psychic: "#ffc9da",
	rock: "#f0e09c",
	fairy: "#ffdee5",
	steel: "#e6eaf0",
	ice: "#e8feff",
	ghost: "#dbbaff",
	dragon: "#c4bdff",
	dark: "#a9abb0"
};

function PokeCard(props) {
	const pokemon = {
		id: props.id,
		image: props.image,
		name: props.name,
		types: props.types,

	}
	function clickCard() {
		props.onSelectPokemon(pokemon);
	}
	return (
		<div onClick={clickCard} className="pokemon-card" style={{ background: `linear-gradient(150deg, ${colors[props.types[0].type.name]} 50%, ${props.types.length > 1 ? colors[props.types[1].type.name] : colors[props.types[0].type.name]} 50%)` }}>
			<img className="pokemon-image" src={props.image} alt="" />
			<p className="poke-id">{props.id}</p>
			<p className="poke-name">{props.name}</p>
			<p className="poke-type">{props.type}</p>
		</div>
	);
}

export default PokeCard;