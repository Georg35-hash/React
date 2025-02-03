import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function PagePost() {
    const [post, setPost] = useState();
    const navigate = useNavigate();
    const params = useParams();
    const postID = params.id;
    const postNumber = +postID;

    
    const maxPosts = 12;

    useEffect(() => {
        const fetchPostAPI = async () => {
            try {
                const { data } = await axios.get(
                    `https://6799e59c747b09cdcccce6aa.mockapi.io/postapi/posts/${postID}`
                );
                setPost(data);
            } catch (error) {
                console.error("Ошибка загрузки поста:", error);
            }
        };

        fetchPostAPI();
    }, [postID]);

    return (
        <div style={{ margin: '20px' }}>
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.text}</p>
                </div>
            ) : (
                <div>Пост не найден</div>
            )}

            {/* Проверка на последний пост */}
            {postNumber >= maxPosts && <p>Посты закончились</p>}

            {/* Кнопки перехода */}
            <div>
                {postNumber < maxPosts && (
                    <button onClick={() => navigate(`/PagePost/${postNumber + 1}`)}>
                        Перейти к следующему посту
                    </button>
                )}

                <button onClick={() => navigate('/PagePosts')}>Перейти к списку</button>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        </div>
    );
}
