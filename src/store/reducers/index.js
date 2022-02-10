import { combineReducers } from "redux";
import categoriesRoutingReducer from "./categoriesRoutingReducer";
import filteredProductsReducer from "./filteredProductsListReducer";
import sortProductsReducer from "./sortProductsReduser";

const rootReducer = combineReducers({
  categoryRoute: categoriesRoutingReducer,
  filter: filteredProductsReducer,
  sort: sortProductsReducer,
});

export default rootReducer;
