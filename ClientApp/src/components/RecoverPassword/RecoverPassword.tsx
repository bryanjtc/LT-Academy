import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Book, ArrowRightSquare } from "react-bootstrap-icons";
import DismissableAlert from "../DismissableAlert";
import styles from "./RecoverPassword.module.css";

const { hero } = styles;

const RecoverPassword = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="d-flex flex-column h-100 gap-5">
      <DismissableAlert variant="primary" show={show} setShow={setShow}>
        Ha sido enviada una contraseña temporal a su correo electronico
      </DismissableAlert>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center h-100 gap-3">
        <div
          className={`d-flex flex-column gap-3 align-items-center w-100 ${hero}`}
        >
          <Book size={200} />
          <h1 className="text-center">LEARN TOGETHER ACADEMY</h1>
        </div>
        <Form className="form border border-primary border-2 rounded p-3 w-100">
          <h3 className="text-center">Recuperar contraseña</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              className="d-flex align-items-center justify-content-center w-100 gap-1"
              variant="primary mb-3"
              onClick={() => setShow(true)}
            >
              <ArrowRightSquare size={14} />
              Continuar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RecoverPassword;
