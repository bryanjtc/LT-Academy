export type CurrentAlertData = {
  message: { content: string };
  show: boolean;
};

const currentAlert = (
  state = {},
  action: { type: "SET_ALERT" | "DISMISS"; payload?: { content: string } }
) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        message: action.payload,
        show: true,
      };
    case "DISMISS":
      return {
        ...state,
        message: {},
        show: false,
      };
    default:
      return state;
  }
};

export default currentAlert;
