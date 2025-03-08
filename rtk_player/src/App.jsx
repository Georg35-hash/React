import store from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";

function App({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default App;
