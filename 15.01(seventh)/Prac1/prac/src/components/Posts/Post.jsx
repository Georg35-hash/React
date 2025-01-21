export default function Post({ post }) {
    return (
        <div>
            <h3>{post.id}</h3>
            <p>UserId: {post.userId}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}
