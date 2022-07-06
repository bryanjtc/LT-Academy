import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  Book,
  ArrowRightSquare,
  ArrowClockwise,
  Person,
} from "react-bootstrap-icons";
import styles from "./Login.module.css";

const { hero } = styles;

const Login = () => {
  return (
    <div className="d-flex justify-content-between align-items-center h-100 gap-3">
      <div className={`d-flex flex-column gap-3 align-items-center ${hero}`}>
        <Book size={200} />
        <h1 className="text-center">LEARN TOGETHER ACADEMY</h1>
      </div>
      <Form className="border border-primary border-2 rounded p-3 w-50">
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
          >
            <ArrowRightSquare size={14} />
            Iniciar Sesión
          </Button>
        </div>
        <div className="d-flex justify-content-between gap-3">
          <Button
            className="d-flex align-items-center justify-content-center w-100 gap-1"
            variant="outline-primary"
          >
            <ArrowClockwise size={14} />
            Recuperar contraseña
          </Button>
          <Button
            className="d-flex align-items-center justify-content-center w-100 gap-1"
            variant="outline-primary"
          >
            <Person size={14} /> Registrarse
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
