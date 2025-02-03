import { Route, Routes, NavLink } from 'react-router-dom';
import PagePosts from './components/PagePosts';
import PagePost from './components/PagePost';
import Home from './components/Home';
import '../../vite-project/src/styles/App.module.css';

function App() {
  return (
    <div>
      <nav style={{ paddingLeft: '20px' }}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/PagePosts'>PagePosts</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PagePosts' element={<PagePosts />} />
        <Route path='/PagePost/:id' element={<PagePost />} /> {/* Добавили маршрут с параметром */}
      </Routes>
    </div>
  );
}

export default App;
