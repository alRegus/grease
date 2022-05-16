const initialState = {
  filteredParamValues: "",
};

export default function filteredParamValuesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "GET_FILTERED_PARAM_VALUES":
      return {
        filteredParamValues: action.payload,
      };
    default:
      return state;
  }
}
