import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ArrowRightSquare } from "react-bootstrap-icons";
import DismissableAlert from "../DismissableAlert";
import styles from "./CourseList.module.css";
import { useSelector } from "react-redux";
import type { CurrentAlertData } from "../../reducers";
const { hero } = styles;

const message = {
  content: "Registro Exitoso",
};

const CourseList = ({ mensaje }: { mensaje?: string }) => {
  const currentAlert = useSelector(
    ({ currentAlert }: { currentAlert: CurrentAlertData }) => currentAlert
  );
  return (
    <div className="d-flex flex-column h-100 gap-5">
      <DismissableAlert variant="success" />
      <div className="d-flex align-items-center h-100">
        <h1 className="text-center">Lista de cursos</h1>
        {[].map(({ title, description, buttonText }) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
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
      </div>
    </div>
  );
};

export default CourseList;
