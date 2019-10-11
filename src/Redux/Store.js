import rootReducer from "./Reducers";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));