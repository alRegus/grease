const initialState = {
  name: "",
  categories: "",
  type: [],
  used: false,
  deals: false,
  brand: [],
  priceRange: [],
  rating: [],
  discount: [],
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
