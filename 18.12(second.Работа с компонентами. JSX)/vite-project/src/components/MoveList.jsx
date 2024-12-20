import Move from "./Move"
function MoveList(props) {
    return(
        <>
            {
                props.movies.map(m => (
                    <Move key={m.id} title={m.title} year={m.year}/>
                ))
            }
        </>
    )
}
export default MoveList