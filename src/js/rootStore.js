import { createStore, applyMiddleware, compose } from "redux";
import { createPromise } from "redux-promise-middleware";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";


const initialState = {};
const middleware = [createPromise(), thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default rootStore;
