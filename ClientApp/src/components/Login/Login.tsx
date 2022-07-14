import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Navigate } from "react-router-dom";
import {
  Book,
  ArrowRightSquare,
  ArrowClockwise,
  Person,
} from "react-bootstrap-icons";
import actions from "../../actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { CurrentUserData } from "../../reducers";
import styles from "./Login.module.css";

const { hero, buttonRegister, buttonRecover, buttonGroup } = styles;

const Login = () => {
  const {
    userActions: { logIn },
  } = actions;
  const currentUser = useSelector(
    ({ currentUser }: { currentUser: CurrentUserData }) => currentUser
  );
  const { loggedIn } = currentUser;
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({ correo: "", password: "" });

  const fetchData = async () => {
    try {
      const response = await axios.post("login", user);
      dispatch(logIn(await response.data));
      setUser({ correo: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };
  const handleUserChange = (event: { currentTarget: any }) => {
    const { currentTarget } = event;
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      fetchData();
    }

    setValidated(true);
  };

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center h-100 gap-5">
      {loggedIn && <Navigate to="/course-list" replace={true} />}
      <div
        className={`d-flex flex-column gap-3 align-items-center w-100 ${hero}`}
      >
        <Book size={200} />
        <h1 className="text-center">LEARN TOGETHER ACADEMY</h1>
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="form border border-primary border-2 rounded p-3 w-100"
      >
        <h3 className="text-center">Inicio de Sesión</h3>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            required
            type="email"
            name="correo"
            defaultValue={user.correo}
            placeholder="nombre@ejemplo.com"
            onChange={handleUserChange}
          />
          <Form.Control.Feedback type="invalid">
            Ingrese su correo.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            defaultValue={user.password}
            placeholder="1234"
            onChange={handleUserChange}
          />
        </Form.Group>
        <Form.Control.Feedback type="invalid">
          Ingrese su contraseña
        </Form.Control.Feedback>
        <div className="d-flex justify-content-center">
          <Button
            className="d-flex align-items-center justify-content-center w-100 gap-1"
            variant="primary mb-3"
            type="submit"
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
