const initialState = {
  name: "",
  categories: "",
  type: "",
  used: false,
  deals: false,
  brand: "",
};

export default function filteredProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER_PARAMS":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
