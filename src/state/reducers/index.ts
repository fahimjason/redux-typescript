import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reduces = combineReducers({
    repositories: repositoriesReducer
});

export default reduces;

export type RootState = ReturnType<typeof reduces>;