function Content(props) {
    // { titleText, paragraghText, imgUrl }


    // const titleText = props.titleText
    // const paragraghText = props.paragraghText
    // const imgUrl = props.imgUrl

    return (
        <div>
            <h1>{props.titleText}</h1>
            <p>{props.paragraghText}</p>
            <img src={props.imgUrl} alt={props.titleText} />
            {props.children}
        </div>
    )
}

export default Content