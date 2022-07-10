import AlertComponent, { AlertProps } from "react-bootstrap/Alert";
import {
  ChatRightDots,
  CheckCircle,
  XOctagon,
  ExclamationTriangle,
} from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import type { CurrentAlertData } from "../../reducers";
import actions from "../../actions";

const size = 16;
const IconVariants = {
  primary: <ChatRightDots size={size} />,
  success: <CheckCircle size={size} />,
  danger: <XOctagon size={size} />,
  warning: <ExclamationTriangle size={size} />,
};

const Alert = ({ variant = "primary" }: { variant: AlertProps["variant"] }) => {
  const currentAlert = useSelector(
    ({ currentAlert }: { currentAlert: CurrentAlertData }) => currentAlert
  );
  const { message } = currentAlert;
  const { content } = message;
  const dispatch = useDispatch();
  const {
    alertActions: { dismiss },
  } = actions;

  return (
    <AlertComponent
      className="d-flex align-items-center justify-content-start w-100 gap-2"
      variant={variant}
      onClose={() => dispatch(dismiss())}
      dismissible
    >
      {IconVariants[variant as "primary" | "success" | "danger" | "warning"]}
      <b className="m-0">{content}</b>
    </AlertComponent>
  );
};

export default Alert;
