export type CurrentUserData = {
  user: { name: string };
  loggedIn: boolean;
};

const currentUser = (
  state = {},
  action: { type: "SET_USER" | "LOG_OUT"; payload?: { name: string } }
) => {
  switch (action.type) {
    case "SET_USER":
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
