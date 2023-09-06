import { NavLink } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../styles/planet.png';
import styles from '../styles/Navbar.module.css';

const SpaceNavbar = () => (
  <Navbar bg="light" data-bs-theme="light">
    <Stack direction="horizontal" gap={6}>
      <Nav className="me-auto">
        <img src={logo} className={styles.logo} alt="" />
        <Navbar.Brand className="p-2">
          <h1>Space Travelers Hub</h1>
        </Navbar.Brand>
        <Nav.Link className="p-2 ms-auto">
          <NavLink to="rockets">Rockets</NavLink>
        </Nav.Link>
        <Nav.Link className="p-2">
          <NavLink to="missions">Missions</NavLink>
        </Nav.Link>
        <Nav.Link className="p-2">
          <NavLink to="dragons">Dragons</NavLink>
        </Nav.Link>
        <div className="vr" />
        <Nav.Link className="p-2">
          <NavLink to="profile">My Profile</NavLink>
        </Nav.Link>
      </Nav>
    </Stack>
  </Navbar>
);

export default SpaceNavbar;
