import type { CurrentUserData } from "../reducers";

const setUser = (data: CurrentUserData["user"]) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const userActions = {
  setUser,
  logOut,
};

export default userActions;
