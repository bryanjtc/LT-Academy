export type CurrentListData = {
  message: { content: string };
  show: boolean;
};

const currentList = (
  state = {},
  action: { type: "SET_LIST" | "REGISTER"; payload?: { content: string } }
) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        list: action.payload,
        show: true,
      };
    case "REGISTER":
      return {
        ...state,
        list: {
          title: "Primer curso",
          description: "Cree su primer curso",
          buttonText: "Crear curso",
          image: "https://picsum.photos/200/300",
        },
        show: false,
      };
    default:
      return state;
  }
};

export default currentList;
