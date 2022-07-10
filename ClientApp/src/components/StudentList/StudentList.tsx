import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "../Alert";
import Table from "react-bootstrap/Table";
import type { CurrentAlertData } from "../../reducers";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Mortarboard } from "react-bootstrap-icons";
import actions from "../../actions";

const StudentList = () => {
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
        <h2 className="text-center">Listado de estudiantes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Cédula</th>
              <th>Fecha Ingreso</th>
              <th>Fecha Terminación</th>
              <th>Estatus</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {[].map((item, index) => (
              <tr key={index}>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>
                  <Button
                    className="d-flex align-items-center justify-content-center w-100 gap-1"
                    variant="primary mb-3"
                  >
                    <Mortarboard size={14} />
                    Entregar Certificado
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default StudentList;
