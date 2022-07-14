import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ArrowRightSquare } from "react-bootstrap-icons";
import CardGroup from "react-bootstrap/CardGroup";
import Alert from "../Alert";
import axios from "axios";
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
  const { isRegister, user } = currentUser;
  const { show } = currentAlert;
  const pathName = useLocation().pathname;
  const templateCourse = [
    {
      id_curso: 0,
      nombre: "Titulo",
      descripcion: "Descripción",
    },
  ];
  const buttonText = isRegister ? "Crear Curso" : "Ingresar";
  const [courseList, setCourseList] = useState(
    isRegister ? templateCourse : []
  );

  useEffect(() => {
    pathName !== "/course-list" && dispatch(dismiss());
  }, [dispatch, dismiss, pathName]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("cursos", {
          id_credencial: user[0].id_credencial,
        });
        setCourseList(await response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [user]);
  return (
    <div className="d-flex flex-column h-100 gap-5">
      {show && <Alert variant="success" />}
      <div className="d-flex flex-column align-items-start h-100 gap-3">
        <h1 className="text-center">Lista de cursos</h1>
        <CardGroup className="gap-5">
          {courseList.map(({ id_curso, nombre, descripcion }) => (
            <Card key={id_curso} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Button
                  className="d-flex align-self-end align-items-center justify-content-center w-100 gap-1"
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
