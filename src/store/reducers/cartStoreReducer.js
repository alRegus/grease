const initialState = [];

export default function cartStoreReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CART":
      return action.payload;
    default:
      return state;
  }
}
