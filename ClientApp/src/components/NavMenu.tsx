import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Search, Book } from "react-bootstrap-icons";
import styles from "./NavMenu.module.css";

const size = "md";
const { navbarBrand, navbar, navLink } = styles;

const NavMenu = () => {
  return (
    <Navbar expand={size} className={`mb-3 ${navbar}`}>
      <Container fluid>
        <Navbar.Brand
          className={`d-flex align-items-center gap-2 ${navbarBrand}`}
          href="#"
        >
          <Book size={25} /> LT Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${size}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${size}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${size}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${size}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex justify-content-between">
            <Nav>
              <Nav.Link className={navLink} href="#action1">
                Inicio
              </Nav.Link>
              <Nav.Link className={navLink} href="#action2">
                Cerrar Sesion
              </Nav.Link>
            </Nav>
            <Form className="d-flex w-50">
              <Form.Control
                type="search"
                placeholder="Busque su curso aqui..."
                className="me-2"
                aria-label="Search"
              />
              <Button
                variant="primary"
                className="d-flex align-items-center gap-1"
              >
                <Search size={14} />
                Buscar
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
