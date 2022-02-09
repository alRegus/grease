import { combineReducers } from "redux";
import categoriesRoutingReducer from "./categoriesRoutingReducer";
import filteredProductsReducer from "./filteredProductsListReducer";

const rootReducer = combineReducers({
  categoryRoute: categoriesRoutingReducer,
  filter: filteredProductsReducer,
});

export default rootReducer;
