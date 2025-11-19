import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import "../index.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="custom-navbar"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        {/* LOGO */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src="/logoTicket.png"
            alt="Logo"
            height="42"
            className="me-2 navbar-logo"
          />
          <span className="fw-bold navbar-title">Las Puertas del Olimpo</span>
        </Navbar.Brand>

        {/* TOGGLE BUTTON */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        {/* LINKS */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#" onClick={() => setExpanded(false)}>
              Inicio
            </Nav.Link>

            <NavDropdown
              title="Productos"
              id="productos-dropdown"
              menuVariant="dark"
              onClick={(e) => e.stopPropagation()}
            >
              <NavDropdown.Item href="#">Metallica</NavDropdown.Item>
              <NavDropdown.Item href="#">AC/DC</NavDropdown.Item>
              <NavDropdown.Item href="#">Sylvania</NavDropdown.Item>
              <NavDropdown.Item href="#">Linkin Park</NavDropdown.Item>
              <NavDropdown.Item href="#">Mago de Oz</NavDropdown.Item>
              <NavDropdown.Item href="#">Feuerschwanz</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Ver todos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" onClick={() => setExpanded(false)}>
              Contacto
            </Nav.Link>

            <div className="ms-lg-3 mt-3 mt-lg-0">
              <CartWidget />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
