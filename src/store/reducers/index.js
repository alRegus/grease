import { combineReducers } from "redux";
import categoriesRoutingReducer from "./categoriesRoutingReducer";

const rootReducer = combineReducers({
  categoryRoute: categoriesRoutingReducer,
});

export default rootReducer;
