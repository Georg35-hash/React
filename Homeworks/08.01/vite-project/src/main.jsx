import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CityCards from './CityCards/CityCards'
import MathQuizApp from './MathQuiz/MathQuizApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CityCards />
    <MathQuizApp/>
  </StrictMode>,
)
