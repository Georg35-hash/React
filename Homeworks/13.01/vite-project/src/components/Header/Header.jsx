import Spotify from '../../assets/g12.svg';
import Styles from '../../styles/Content.module.css';



export default function Header(){
    return(
     <img className={Styles.logo} src={Spotify} alt="logo" />
    )
  }