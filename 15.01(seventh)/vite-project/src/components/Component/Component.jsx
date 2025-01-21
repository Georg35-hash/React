import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Component() {
    const [posts, setPosts] = useState()
    function fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .catch(err => console.error(err));

    }

    useEffect(() => {
        fetchData();

    }, []);
    return (
        <div>
            {posts.map(post => <li key={post.id}>{post.body}</li>)}
        </div>
    );
}