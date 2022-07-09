import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import { Search, Book } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import type { CurrentUserData } from "../../reducers";
import actions from "../../actions";
import styles from "./NavMenu.module.css";

const size = "md";
const { navbarBrand, navbar, navLink } = styles;

const NavMenu = () => {
  const currentUser = useSelector(
    ({ currentUser }: { currentUser: CurrentUserData }) => currentUser
  );
  const { loggedIn } = currentUser;
  const dispatch = useDispatch();
  const {
    userActions: { logOut },
  } = actions;
  const pathName = useLocation().pathname;
  return (
    <Navbar expand={size} className={`mb-3 sticky-top ${navbar}`}>
      <Container fluid>
        <Navbar.Brand
          className={`d-flex align-items-center gap-2 ${navbarBrand}`}
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
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-md-flex justify-content-between">
            <Nav className="w-100">
              {pathName !== "/" && (
                <LinkContainer to={loggedIn ? "/course-list" : "/"}>
                  <Nav.Link className={navLink}>Inicio</Nav.Link>
                </LinkContainer>
              )}
              {loggedIn && (
                <LinkContainer to="/">
                  <Nav.Link
                    className={navLink}
                    onClick={() => dispatch(logOut())}
                  >
                    Cerrar Sesión
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
            <Form className="d-flex w-100">
              <Form.Control
                type="search"
                placeholder="Busque su curso aquí..."
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
