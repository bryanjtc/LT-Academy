import type { CurrentAlertData } from "../reducers";

const setAlert = (data: CurrentAlertData["message"]) => {
  return {
    type: "SET_ALERT",
    payload: data,
  };
};

const dismiss = () => {
  return {
    type: "DISMISS",
  };
};

const alertActions = {
  setAlert,
  dismiss,
};

export default alertActions;
