const initialState = {
  display: false,
};

export default function displayFilterMenuReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DISPLAY_FILTER_MENU":
      return {
        display: action.payload,
      };
    default:
      return state;
  }
}
