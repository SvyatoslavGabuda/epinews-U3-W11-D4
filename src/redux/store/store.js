import { combineReducers, configureStore } from "@reduxjs/toolkit";
import firstReducer from "../redurers/firstReducer";

const allRed = combineReducers({
  counter: firstReducer,
});

const store = configureStore({
  reducer: allRed,
});

export default store;
