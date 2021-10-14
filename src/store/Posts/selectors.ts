import { IReduxState } from "..";

export const postsSelector = (state: IReduxState) => state.postsReducer.posts;
