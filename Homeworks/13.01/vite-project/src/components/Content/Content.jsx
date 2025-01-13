import Google from '../../assets/Google.svg';
import Apple from '../../assets/Apple.svg';
import X from '../../assets/X.svg';
import Styles from '../../styles/Content.module.css';

export default function Content() {
    return (
        <>
            <h1 className={Styles.h1}>LIFE IS WASTED ON THE LIVING</h1>
            <p className={Styles.sign_in}>Sign in</p>
            <p className={Styles.with}> with </p>

            <div className={Styles.button_content}>
                <button><a href="https://www.google.com/"><img src={Google} alt="Google" /></a></button>
                <button><a href="#"><img src={Apple} alt="Apple" /></a></button>
                <button><a href="https://x.com/"><img src={X} alt="X" /></a></button>
            </div>
        </>
    );
}