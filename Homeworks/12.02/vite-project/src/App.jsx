
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './components/User';
import UserForm from './components/UserForm';

const App = () => (
    <Provider store={store}>
        <div>
            <User />
            <UserForm />
        </div>
    </Provider>
);

export default App;
