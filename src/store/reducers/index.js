import { combineReducers } from "redux";
import categoriesRoutingReducer from "./categoriesRoutingReducer";
import filteredProductsReducer from "./filteredProductsListReducer";
import sortProductsReducer from "./sortProductsReduser";
import listViewReducer from "./listViewReducer";

const rootReducer = combineReducers({
  categoryRoute: categoriesRoutingReducer,
  filter: filteredProductsReducer,
  sort: sortProductsReducer,
  view: listViewReducer,
});

export default rootReducer;
