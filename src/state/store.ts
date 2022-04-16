import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduces from "./reducers";

export const store = createStore(reduces, {}, applyMiddleware(thunk));