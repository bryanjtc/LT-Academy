import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ArrowRightSquare } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actions from "../../actions";
import styles from "./AddCourse.module.css";

const { hero } = styles;
const message = {
  content: "Contenido se ha agregado con éxito",
};

const AddCourse = () => {
  const {
    alertActions: { setAlert },
  } = actions;
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center h-100 gap-3 mb-5">
      <h1>Curso</h1>
      <div
        className={`d-flex flex-column gap-3 align-items-center w-100 ${hero}`}
      >
        <h3 className="text-center">Vista previa</h3>
        <div className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Titulo</Card.Title>
              <Card.Text>Descripción</Card.Text>
            </Card.Body>
          </Card>
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
      </div>
      <Form className="form border border-primary border-2 rounded p-3 w-100">
        <h2 className="text-center">Agregando contenido</h2>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Numero de contenido</Form.Label>
          <Form.Control type="number" placeholder="1" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Nombre de contenido</Form.Label>
          <Form.Control type="text" placeholder="Presentación" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción de contenido</Form.Label>
          <Form.Control type="text" placeholder="Introducción a metodología" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Modulo</Form.Label>
          <Form.Control type="text" placeholder="Modulo 1" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddCourse;
