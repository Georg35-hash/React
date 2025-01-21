import axios from 'axios';
import { useState, useEffect } from 'react';
import User from './User';


export default function UserProfile() {
    const [users, setUsers] = useState([]);
    // const [newUsers, setNewUsers] = useState("");

    async function fetchUser() {
        try {
            const response = await axios.get('https://randomuser.me/api/');
            setUsers(response.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);


    function handleChange(e) {
        e.preventDefault();
        fetchUser();
    }

    return (
        <div style={{ display: 'flex' }}>
            <ul style={{ listStyle: 'none' }}>
                {users.map((user, index) => (
                    <li key={index}>
                        <User user={user} />
                    </li>
                ))}
                <button onClick={handleChange}> Add User</button>
            </ul>


        </div>
    );
}
