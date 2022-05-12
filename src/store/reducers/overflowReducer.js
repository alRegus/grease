const initialState = {
  overflow: "scroll",
};

export default function overflowReducer(state = initialState, action) {
  switch (action.type) {
    case "OVERFLOW_TOGGLE":
      return {
        overflow: action.payload,
      };
    default:
      return state;
  }
}
