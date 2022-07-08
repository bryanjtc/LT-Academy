import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ArrowRightSquare } from "react-bootstrap-icons";
import DismissableAlert from "../DismissableAlert";
import type { CurrentAlertData } from "../../reducers";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";

const CourseList = () => {
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
    pathName !== "/course-list" && dispatch(dismiss());
  }, [dispatch, dismiss, pathName]);
  return (
    <div className="d-flex flex-column h-100 gap-5">
      {show && <DismissableAlert variant="success" />}
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