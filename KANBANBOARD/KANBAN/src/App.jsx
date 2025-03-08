import store from './redux/store'
import { Provider } from 'react-redux';
import Board from './components/Board';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Board />
    </Provider>

  )
}

export default App
