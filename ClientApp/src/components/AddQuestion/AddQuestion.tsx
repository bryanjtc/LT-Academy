import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ArrowRightSquare, FileEarmark, Trash3 } from "react-bootstrap-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import styles from "./AddQuestion.module.css";

const { hero, buttonGroup } = styles;

const AddQuestion = () => {
  return (
    <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center h-100 gap-3 mb-5">
      <h1>Curso</h1>
      <div
        className={`d-flex flex-column gap-3 align-items-center w-100 ${hero}`}
      >
        <h3 className="text-center">Agregando pregunta</h3>
        <Form className="form border border-primary border-2 rounded p-3 w-100">
          <h2 className="text-center">Agregando contenido</h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Texto de la pregunta</Form.Label>
            <Form.Control type="number" placeholder="Ejemplo" />
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
          <div>
            <InputGroup>
              <InputGroup.Radio aria-label="Radio button for following text input" />
              <Form.Control aria-label="Text input with radio button" />
            </InputGroup>
            <Button
              className="d-flex align-items-center justify-content-center w-100 gap-1 h-100"
              variant="outline-primary"
            >
              <Trash3 size={14} />
              Eliminar
            </Button>
          </div>
          <div className={buttonGroup}>
            <Link to="/recover-password" className={`w-100 h-100`}>
              <Button
                className="d-flex align-items-center justify-content-center w-100 gap-1 h-100"
                variant="outline-primary"
              >
                <FileEarmark size={14} />
                Agregar pregunta
              </Button>
            </Link>
            <Link to="/register" className={`w-100 h-100`}>
              <Button
                className="d-flex align-items-center justify-content-center w-100 gap-1 h-100"
                variant="outline-primary"
              >
                <ArrowRightSquare size={14} /> Finalizar edición
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddQuestion;
