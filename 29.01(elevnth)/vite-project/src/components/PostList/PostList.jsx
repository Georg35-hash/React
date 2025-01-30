import Post from '../Post/Post';
import styles from './PostList.module.css';
import axios from 'axios';
import { useEffect, useState } from "react";
export default function PostList() {

    const [allPosts, setAllPosts] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const start = page * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const POSTS_PER_PAGE = 3;

    async function fetchPosts() {
        try {

            const response = await axios.get('https://6799e59c747b09cdcccce6aa.mockapi.io/postapi/posts');
            setCurrentPosts(response.data.slice(0, POSTS_PER_PAGE));
            setAllPosts(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    useEffect(() => (
        fetchPosts()
    ), []);


    function loadMorePosts() {
        setPage(page => page + 1);

        setCurrentPosts(allPosts.slice(start, end));
    }


    function handleDelete(id) {
        const newAllPosts = setAllPosts(allPosts => allPosts.filter(obj => obj.id !== id));
        setAllPosts(newAllPosts);
        setCurrentPosts(newAllPosts.slice(start, end));
    }
    if (loading) return <p>Posts are loading...</p>;
    if (error) return <p>error.message</p>;
    return (
        <div className={styles.postsListContainer}>
        <h1 className={styles.title}>List of posts</h1>
        <ul className={styles.postList}>
            {currentPosts.map(post => 
                <Post key={post.id} post={post} handleDelete={handleDelete}/>
            )}
        </ul>
        { allPosts.length > end && <button className={styles.nextBtn} onClick={loadMorePosts}>Next</button> }
    </div>
    );
};