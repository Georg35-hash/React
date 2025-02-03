import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function PagePosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const { data } = await axios.get('https://6799e59c747b09cdcccce6aa.mockapi.io/postapi/posts');
                setPosts(data);
            } catch (error) {
                console.error(error);

            }
        };

        fetchPosts();
    }, []);




    return (
        <div>
            {posts.map(post => (
                <li key={post.id}>
                    <Link to={`/PagePost/${post.id}`}>{post.title}</Link>
                </li>
            ))}

        </div>
    );
}


