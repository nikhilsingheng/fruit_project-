import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import formReducer from "./reducers";

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
