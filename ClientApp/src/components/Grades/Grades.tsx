import { useEffect } from "react";
import Alert from "../Alert";
import Table from "react-bootstrap/Table";
import type { CurrentAlertData } from "../../reducers";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";

const Grades = () => {
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
        <h2 className="text-center">Notas del curso</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Evaluación</th>
              <th>Nota</th>
              <th>Dia realizado</th>
            </tr>
          </thead>
          <tbody>
            {[].map((item, index) => (
              <tr key={index}>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Grades;
