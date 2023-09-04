import { NavLink } from 'react-router-dom';
import logo from '../styles/planet.png';

const Navbar = () => (
  <nav>
    <h1>Space Travelers Hub</h1>
    <ul>
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="missions">Missions</NavLink></li>
      <li><NavLink to="dragons">Dragons</NavLink></li>
      <li><NavLink to="profile">My Profile</NavLink></li>
    </ul>
    <img src={logo} alt="" />
  </nav>
);

export default Navbar;
