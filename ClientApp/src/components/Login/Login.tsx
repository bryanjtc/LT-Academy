import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  Book,
  ArrowRightSquare,
  ArrowClockwise,
  Person,
} from "react-bootstrap-icons";
import actions from "../../actions";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";

const { hero, buttonRegister, buttonRecover, buttonGroup } = styles;

const Login = () => {
  const user = { name: "Rei" };
  const {
    userActions: { setUser },
  } = actions;
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center h-100 gap-5">
      <div
        className={`d-flex flex-column gap-3 align-items-center w-100 ${hero}`}
      >
        <Book size={200} />
        <h1 className="text-center">LEARN TOGETHER ACADEMY</h1>
      </div>
      <Form className="form border border-primary border-2 rounded p-3 w-100">
        <h3 className="text-center">Inicio de Sesión</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="1234" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            className="d-flex align-items-center justify-content-center w-100 gap-1"
            variant="primary mb-3"
            onClick={() => dispatch(setUser(user))}
          >
            <ArrowRightSquare size={14} />
            Iniciar Sesión
          </Button>
        </div>
        <div className={buttonGroup}>
          <Link
            to="/recover-password"
            className={`w-100 h-100 ${buttonRecover}`}
          >
            <Button
              className="d-flex align-items-center justify-content-center w-100 gap-1 h-100"
              variant="outline-primary"
            >
              <ArrowClockwise size={14} />
              Recuperar contraseña
            </Button>
          </Link>
          <Link to="/register" className={`w-100 h-100 ${buttonRegister}`}>
            <Button
              className="d-flex align-items-center justify-content-center w-100 gap-1 h-100"
              variant="outline-primary"
            >
              <Person size={14} /> Registrarse
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
