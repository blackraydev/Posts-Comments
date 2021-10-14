import { createStore, combineReducers } from "redux";
import postsReducer from "./Posts";

const reducer = combineReducers({ 
  postsReducer,
});

const store = createStore(reducer);

export default store;

export type IReduxState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;