const initialState = {
  count: 39,
};

export default function filteredProductQuantityReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "GET_FILTERED_QUANTITY":
      return {
        count: action.payload,
      };
    default:
      return state;
  }
}
