import Content from '../Content/Content';
import Header from '../Header/Header';
import AppStyles from '../../styles/App.module.css';
export default function App() {
  return (
    <body className= {AppStyles}>
      <Header />
      <Content />
    </body>
  );
}