import { IReduxState } from "..";

export const postsSelector = (state: IReduxState) => state.postsReducer.posts;
export const postsLoadingSelector = (state: IReduxState) => state.postsReducer.isLoading;
export const postsErrorSelector = (state: IReduxState) => state.postsReducer.hasError;
