export type CurrentUserData = {
  user: { name: string };
  loggedIn: boolean;
};

const currentUser = (
  state = {},
  action: { type: "LOGIN" | "LOG_OUT"; payload?: { name: string } }
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default currentUser;
