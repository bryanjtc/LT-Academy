import { ReactNode } from "react";
import Alert, { AlertProps } from "react-bootstrap/Alert";
import {
  ChatRightDots,
  CheckCircle,
  XOctagon,
  ExclamationTriangle,
} from "react-bootstrap-icons";

const size = 16;
const IconVariants = {
  primary: <ChatRightDots size={size} />,
  success: <CheckCircle size={size} />,
  danger: <XOctagon size={size} />,
  warning: <ExclamationTriangle size={size} />,
};

const DismissableAlert = ({
  children,
  variant = "primary",
  show,
  setShow,
}: {
  children: ReactNode;
  variant: AlertProps["variant"];
  show: boolean;
  setShow: any;
}) => {
  if (show) {
    return (
      <Alert
        className="d-flex align-items-center justify-content-start w-100 gap-2"
        variant={variant}
        onClose={() => setShow(false)}
        dismissible
      >
        {IconVariants[variant as "primary" | "success" | "danger" | "warning"]}
        <b className="m-0">{children}</b>
      </Alert>
    );
  }
  return <></>;
};

export default DismissableAlert;
