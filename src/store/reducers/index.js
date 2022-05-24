import { combineReducers } from "redux";
import categoriesRoutingReducer from "./categoriesRoutingReducer";
import filteredProductsReducer from "./filteredProductsListReducer";
import sortProductsReducer from "./sortProductsReduser";
import listViewReducer from "./listViewReducer";
import toggleSignInReducer from "./toggleSignInReducer";
import overflowReducer from "./overflowReducer";
import filteredProductQuantityReducer from "./filteredProductQuantityReducer";
import displayFilterMenuReducer from "./displayFilterMenuReducer";
import filteredParamValuesReducer from "./filteredParamValuesReducer";
import cartStoreReducer from "./cartStoreReducer";

const rootReducer = combineReducers({
  categoryRoute: categoriesRoutingReducer,
  filter: filteredProductsReducer,
  sort: sortProductsReducer,
  view: listViewReducer,
  signIn: toggleSignInReducer,
  overflow: overflowReducer,
  count: filteredProductQuantityReducer,
  display: displayFilterMenuReducer,
  filteredParamValues: filteredParamValuesReducer,
  cart: cartStoreReducer,
});

export default rootReducer;
