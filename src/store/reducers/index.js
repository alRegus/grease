import { combineReducers } from "redux";
import categoriesRoutingReducer from "./categoriesRoutingReducer";
import filteredProductsReducer from "./filteredProductsListReducer";
import sortProductsReducer from "./sortProductsReduser";
import listViewReducer from "./listViewReducer";
import toggleSignInReducer from "./toggleSignInReducer";
import overflowReducer from "./overflowReducer";

const rootReducer = combineReducers({
  categoryRoute: categoriesRoutingReducer,
  filter: filteredProductsReducer,
  sort: sortProductsReducer,
  view: listViewReducer,
  signIn: toggleSignInReducer,
  overflow: overflowReducer,
});

export default rootReducer;
