import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Book, ArrowRightSquare } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../actions";
import styles from "./Register.module.css";

const { hero } = styles;
const message = {
  content: "Registro Exitoso",
};

const Register = () => {
  const {
    alertActions: { setAlert },
  } = actions;
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center h-100 gap-3 mb-5">
      <div
        className={`d-flex flex-column gap-3 align-items-center w-100 ${hero}`}
      >
        <Book size={200} />
        <h1 className="text-center">LEARN TOGETHER ACADEMY</h1>
      </div>
      <Form className="form border border-primary border-2 rounded p-3 w-100">
        <h3 className="text-center">Registrarse</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Matias" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Salazar" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Género</Form.Label>
          <Form.Select className="mb-3" aria-label="Genero">
            <option>Elija su género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="no binario">No binario</option>
            <option value="trasgénero">Transgénero</option>
            <option value="otro">Otro</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Rol</Form.Label>
          <Form.Select aria-label="Rol">
            <option>Elija su rol</option>
            <option value="Profesor">Profesor</option>
            <option value="Estudiante">Estudiante</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="nombre@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="1234" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="1234" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Link
            to="/course-list"
            className={`w-100 h-100`}
            onClick={() => dispatch(setAlert(message))}
          >
            <Button
              className="d-flex align-items-center justify-content-center w-100 gap-1"
              variant="primary mb-3"
            >
              <ArrowRightSquare size={14} />
              Continuar
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
