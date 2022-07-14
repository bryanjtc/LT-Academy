export type CurrentUserData = {
  user: { id_credencial: number }[];
  loggedIn: boolean;
  isRegister: boolean;
};

const currentUser = (
  state = {},
  action: {
    type: "LOGIN" | "LOG_OUT" | "REGISTER";
    payload?: { id_credencial: number }[];
  }
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        loggedIn: action.payload?.length === 1 ? true : false,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    case "REGISTER":
      return {
        ...state,
        isRegister: true,
      };
    default:
      return state;
  }
};

export default currentUser;
