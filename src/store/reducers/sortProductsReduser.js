const initialState = {
  sortBy: "",
};

export default function sortProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SORT_BY":
      return {
        sortBy: action.payload,
      };
    default:
      return state;
  }
}
