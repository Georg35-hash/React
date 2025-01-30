import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hren from './Hren.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hren/>
    <App />
  </StrictMode>,
)
