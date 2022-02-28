const initialState = {
  signIn: true,
};

export default function toggleSignInReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SIGN_IN":
      return {
        signIn: action.payload,
      };
    default:
      return state;
  }
}
