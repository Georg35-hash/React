import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [{id: 1, name: "Alisa", age: 21, email: "qwerty@gmail"}],
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        editUser: (state, action) => {
            const editedUser = state.users.find((user) => user.id === action.payload.id);
            if (editedUser) {
                // Object.assign(editedUser, action.payload)
                editedUser.name = action.payload.name;
                editedUser.age = action.payload.age;
                editedUser.email = action.payload.email;
            }
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
});
export const {addUser, editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
