import PostList from './components/Posts/PostList';
import Styles from './styles/Timer.module.css';
import Timer from './components/Timer/Timer';
function App() {
  return (
    <div className={Styles.app}>
      <PostList/>
      <Timer />
    </div>
  );
}

export default App;
