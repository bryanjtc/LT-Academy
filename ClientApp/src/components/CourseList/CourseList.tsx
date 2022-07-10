import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ArrowRightSquare } from "react-bootstrap-icons";
import CardGroup from "react-bootstrap/CardGroup";
import Alert from "../Alert";
import type { CurrentAlertData, CurrentUserData } from "../../reducers";
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
  const currentUser = useSelector(
    ({ currentUser }: { currentUser: CurrentUserData }) => currentUser
  );
  const { isRegister } = currentUser;
  const { show } = currentAlert;
  const pathName = useLocation().pathname;
  const templateCourse = [
    {
      title: "Titulo",
      description: "Descripción",
      buttonText: "Crear curso",
      image: "https://picsum.photos/348/157",
    },
  ];
  const coursesList = isRegister ? templateCourse : [];
  useEffect(() => {
    pathName !== "/course-list" && dispatch(dismiss());
  }, [dispatch, dismiss, pathName]);
  return (
    <div className="d-flex flex-column h-100 gap-5">
      {show && <Alert variant="success" />}
      <div className="d-flex flex-column align-items-start h-100 gap-3">
        <h1 className="text-center">Lista de cursos</h1>
        <CardGroup>
          {coursesList.map(({ title, description, buttonText, image }) => (
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
      </div>
    </div>
  );
};

export default CourseList;
