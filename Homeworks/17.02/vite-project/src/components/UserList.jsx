import { useCallback, useState, useMemo } from "react";

export default function UserList({ userList }) {
    const [filter, setFilter] = useState('');



    const filterUsers = useCallback((text) => {

        return userList.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
    }, []);

    const filteredUsers = useMemo(() => filterUsers(filter), [filter, setFilter]);
    // const filterUsers = useCallback((text) => {
    //     return userList.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
    // }, [userList]);

    // const filteredUsers = useMemo(() => filterUsers(filter), [filter, setFilter]);
    // return (
    //     <>
    //         <input type='text'
    //             value={filter}
    //             onChange={(e) => setFilter(e.target.value)}
    //         />
    //         <ul>
    //             {
    //                 filteredUsers.map((user => <li key={user.id}> {user.name}{user.age}</li>))
    //             }
    //         </ul>
    //     </>
    // );
    return (
        <>
            <input type='text'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {
                    filteredUsers.map(user => <li key={user.id}>{user.name}, {user.age}</li>)
                }
            </ul>

        </>
    );
}
