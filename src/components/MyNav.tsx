import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            EpiNews
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
