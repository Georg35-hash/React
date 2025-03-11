import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";
import { useState } from "react";
import { editUser } from "../redux/userSlice";

export default function UserItem({ user }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(user);

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditForm(user);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z]{3,30}$/.test(editForm.name) &&
      /^(100|[1-9]?[0-9])$/.test(editForm.age) &&
      editForm.email !== ""
    ) {
      setIsEditing(false);
      dispatch(editUser(editForm));
    }
  };

  return (
    <li>
      {!isEditing ? (
        <>
          <h3>name: {user.name}</h3>
          <p>age: {user.age}</p>
          <p>email: {user.email}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}> Delete</button>
        </>
      ) : (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          />
          <input
            type="number"
            min="0"
            max="130"
            value={editForm.age}
            onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
          />
          <input
            type="email"
            value={editForm.email}
            onChange={(e) =>
              setEditForm({ ...editForm, email: e.target.value })
            }
          />

          <button>Save</button>
          <button onClick={handleCancel} type="button">
            Cancel
          </button>
        </form>
      )}
    </li>
  );
}
