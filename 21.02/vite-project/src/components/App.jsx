import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import User from './pages/User'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<User />} />
        <Route path='/user/:id' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
