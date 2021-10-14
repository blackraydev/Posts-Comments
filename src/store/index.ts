import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./Posts";

const reducer = combineReducers({ 
  postsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export type IReduxState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;