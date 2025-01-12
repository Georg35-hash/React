import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function handelClick (number){
    setCount(prevCount => prevCount + number)
  }
  return (
    <>
    <h1>{count}</h1>
    {/* /По клику вызываем можно сказать обертку для функции handelClick чтоб не выдавал Undef */}
  <button onClick={() => handelClick(8)}>
    Click me
  </button>
    </>
  )
}

export default App
