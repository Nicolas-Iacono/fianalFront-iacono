import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import themeLogo from "../../../public/images/theme (1).png";
import { GlobalThemes } from '../utils/context/GlobalThemesProvider';
import { useContext } from 'react';

const Navbar = () => {
  const { theme, toggleDarkMode } = useContext(GlobalThemes);

  return (
    <div className={styles.container} style={{ color: theme.nav.font, background: theme.nav.backGround, borderBottom: theme.nav.borderBottom}}>
      <div className={styles.logo}>
        <h1 style={{ color: theme.home.font, background: theme.home.backGround }}><span className={styles.d}>D</span><span className={styles.h} style={{ color: theme.home.font, background: theme.home.backGround }}>H</span> Odonto</h1>
      </div>
      <div className={styles.btnNav}>
        <nav>
          <ul className={styles.list} >
            <Link className={styles.link} to="/"><li style={{ color: theme.home.font, background: theme.home.backGround }}>Home</li></Link>
            <Link className={styles.link} to="/contact"><li style={{ color: theme.home.font, background: theme.home.backGround }}>Contacts</li></Link>
            <Link className={styles.link} to="/Favs"><li style={{ color: theme.home.font, background: theme.home.backGround }}>Favs</li></Link>
          </ul>
        </nav>
        <button onClick={toggleDarkMode} style={{ color: theme.nav.font, background: theme.nav.backGround}}>
          <img src={themeLogo} alt=""style={{ color: theme.nav.font, background: theme.nav.backGround}} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;