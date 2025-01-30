import User form '../../assets/user.svg'

export default function Post({ post, handleDelete }){
    return(
        <div>
        <img src={User} alt="User" />
        </div>
        <div>
            <h3>post.title</h3>
            <p>post.text</p>
        </div>
        <div>
            <p>{post.id}</p>
            <button onClick={handleDelete}>Удалить</button>
        </div>
    )
}