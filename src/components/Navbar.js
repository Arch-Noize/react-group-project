import { NavLink } from 'react-router-dom';
import logo from '../styles/planet.png';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <img src={logo} className={styles.logo} alt="" />
    <NavLink to="/"><h1>Space Travelers Hub</h1></NavLink>
    <ul className={styles.list}>
      <li className={styles.navItem}><NavLink to="rockets">Rockets</NavLink></li>
      <li className={styles.navItem}><NavLink to="missions">Missions</NavLink></li>
      <li className={styles.navItem}><NavLink to="dragons">Dragons</NavLink></li>
      <li className={styles.navItem}><NavLink to="profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
