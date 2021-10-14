import { IReduxState } from "..";

export const commentsSelector = (state: IReduxState) => state.commentsReducer.comments;
export const commentsLoadingSelector = (state: IReduxState) => state.commentsReducer.isLoading;
export const commentsErrorSelector = (state: IReduxState) => state.commentsReducer.hasError;