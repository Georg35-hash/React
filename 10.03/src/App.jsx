import  store  from './redux/store'
import { Provider } from 'react-redux'
import './App.css'
import UserList from './components/UserList'

function App() {

  return (

    <Provider store = {store}>
      <UserList/>
    </Provider>
  
  )
}

export default App
