const initialState = {
  name: "",
  categories: "",
  type: "",
  used: false,
  deals: false,
  brand: [],
  priceRange: [], //!!не забыть добавить в остальных диспатчах
};

export default function filteredProductsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER_PARAMS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
