import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Алексей", email: "alex@example.com" },
    { id: 2, name: "Мария", email: "maria@example.com" },
    { id: 3, name: "Иван", email: "ivan@example.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
