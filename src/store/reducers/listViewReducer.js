const initialState = {
  view: "list",
};

export default function listViewReducer(state = initialState, action) {
  switch (action.type) {
    case "VIEW_TOGGLE":
      return {
        view: action.payload,
      };
    default:
      return state;
  }
}
