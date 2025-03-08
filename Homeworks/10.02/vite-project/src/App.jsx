import React from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <div>
    <Provider store={store}>
      <h1>User Filter</h1>
      <Filter />
      <UserList />
    </Provider>
  </div>
);

export default App;
