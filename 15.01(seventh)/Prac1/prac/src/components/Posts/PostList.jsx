import Post from './Post';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostList() {
    const [pageNumber, setPageNumber] = useState(1);
    const [postList, setPostList] = useState([]);
    const [postOnPage, setPostOnPage] = useState([]);

    async function fetchData() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Hinzufügen von await
            setPostList(res.data);
            setPostOnPage(res.data.slice(0, 10)); // Nutze `slice` statt `splice`
        } catch (error) {
            console.error(error); // `console.log` durch `console.error` ersetzt
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleClick() {
        const startIndex = pageNumber * 10;
        const endIndex = startIndex + 10;
        if (startIndex < postList.length) {
            setPostOnPage(postList.slice(startIndex, endIndex)); // Nutze `slice` statt `splice`
            setPageNumber(pageNumber + 1); // Setze die Seitennummer hoch
        }
    }

    return (
        <div>
            <p>Page: {pageNumber}</p>
            <ul>
                {postOnPage.map(post => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
            <button onClick={handleClick} disabled={pageNumber * 10 >= postList.length}>
                Next Page
            </button>
        </div>
    );
}
