import { combineReducers } from "redux";
import searchReducer from "./reducers/searchReducer";

export const rootReducer = combineReducers({
  data: searchReducer
});

export default rootReducer;
