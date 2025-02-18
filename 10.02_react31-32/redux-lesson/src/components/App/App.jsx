import { Provider } from 'react-redux'
import store from '../../store/store'
import Counter from './Counter'

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Redux Counter</h1>
        <Counter />
      </div>
    </Provider>
  )
}
