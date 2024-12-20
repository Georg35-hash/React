import Pokemon from "./Pokemon"

function PokemonList(props) {

    return (
        <>
            {props.pokemons.map(p => (
                <Pokemon key={p.id} name={p.name} type={p.type} />
            ))}
        </>
    )
}
export default PokemonList