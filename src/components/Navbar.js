import { NavLink } from 'react-router-dom';
import { Stack, Nav, Navbar } from 'react-bootstrap/';
import logo from '../styles/planet.png';

const SpaceNavbar = () => (
  <Navbar bg="light" data-bs-theme="light">
    <Stack direction="horizontal" gap={1}>
      <Nav className="me-auto nav">
        <img src={logo} className="logo" alt="" />

        <Navbar.Brand className="p-2">
          <h1>Space Travelers Hub</h1>
        </Navbar.Brand>

        <Nav.Link className="p-2 ms-auto">
          <NavLink to="rockets" className="navItem">Rockets</NavLink>
        </Nav.Link>

        <Nav.Link className="p-2">
          <NavLink to="missions" className="navItem">Missions</NavLink>
        </Nav.Link>

        <Nav.Link className="p-2">
          <NavLink to="dragons" className="navItem">Dragons</NavLink>
        </Nav.Link>

        <div className="vr" />

        <Nav.Link className="p-2 navItem">
          <NavLink to="profile" className="navItem">My Profile</NavLink>
        </Nav.Link>

      </Nav>
    </Stack>
  </Navbar>
);

export default SpaceNavbar;
