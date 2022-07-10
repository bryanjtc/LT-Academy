import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "../Alert";
import Badge from "react-bootstrap/Badge";
import CardGroup from "react-bootstrap/CardGroup";
import type { CurrentAlertData } from "../../reducers";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowRightSquare,
  FilesAlt,
  FileEarmarkText,
  FileEarmark,
  PencilSquare,
} from "react-bootstrap-icons";
import styles from "./Listado.module.css";
import actions from "../../actions";

const { buttonGroup } = styles;

const buttonProps = {
  className:
    "d-flex align-items-center justify-content-center w-100 gap-1 h-100",
  variant: "primary",
};

const Listado = () => {
  const {
    alertActions: { dismiss },
  } = actions;
  const dispatch = useDispatch();
  const currentAlert = useSelector(
    ({ currentAlert }: { currentAlert: CurrentAlertData }) => currentAlert
  );
  const { show } = currentAlert;
  const pathName = useLocation().pathname;
  useEffect(() => {
    pathName !== "/Listado-list" && dispatch(dismiss());
  }, [dispatch, dismiss, pathName]);
  return (
    <div className="d-flex flex-column h-100 gap-5">
      {show && <Alert variant="success" />}
      <div className="d-flex align-items-center h-100">
        <h1 className="text-center">Curso</h1>
        <div>
          <Badge pill bg="primary">
            Curso abierto
          </Badge>
          <Badge pill bg="primary">
            Máximo de estudiantes
          </Badge>
          <Badge pill bg="primary">
            Asignaciones
          </Badge>
        </div>
        <div className={buttonGroup}>
          <Link to="/recover-password" className={`w-100 h-100`}>
            <Button {...buttonProps}>
              <FilesAlt size={14} />
              Ver listado de estudiantes
            </Button>
          </Link>
          <Link to="/register" className={`w-100 h-100`}>
            <Button {...buttonProps}>
              <FileEarmarkText size={14} /> Crear evaluación
            </Button>
          </Link>
          <Link to="#action" className={`w-100 h-100`}>
            <Button {...buttonProps}>
              <FileEarmark size={14} /> Agregar contenido
            </Button>
          </Link>
          <Link to="#action" className={`w-100 h-100`}>
            <Button {...buttonProps}>
              <PencilSquare size={14} /> Banco de preguntas
            </Button>
          </Link>
        </div>
        <div>
          {[].map((item, index) => (
            <>
              <h3>Modulo</h3>
              <CardGroup>
                {[].map(({ title, description, buttonText, image }) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                      <Button
                        className="d-flex align-items-center justify-content-center w-100 gap-1"
                        variant="primary mb-3"
                      >
                        <ArrowRightSquare size={14} />
                        {buttonText}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
              </CardGroup>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listado;
