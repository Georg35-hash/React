function Pokemon(props) {

    return (
        <>
            <ul>
                <h3>{props.name}</h3>
                <p>{props.type}</p>
            </ul>
        </>
    )
}
export default Pokemon

