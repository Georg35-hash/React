import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import UserItem from "./UserItem";

export default function UserList() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", age: 0, email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z]{3,30}$/.test(form.name) &&
      /^(100|[1-9]?[0-9])$/.test(form.age) &&
      form.email !== ""
    )
      dispatch(addUser({ ...form, id: Date.now() }));
    setForm({ name: "", age: 0, email: "" });
  };

  return (
    <>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          min="0"
          max="130"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <button>Add</button>
      </form>
    </>
  );
}
