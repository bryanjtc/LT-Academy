import type { CurrentUserData } from "../reducers";

const logIn = (data: CurrentUserData["user"]) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const userActions = {
  logIn,
  logOut,
};

export default userActions;
