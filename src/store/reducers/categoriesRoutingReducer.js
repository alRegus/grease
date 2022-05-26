const initialState = {
  route: "",
};

export default function categoriesRoutingReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORY_ROUTE":
      return {
        route: action.payload,
      };
    default:
      return state;
  }
}
