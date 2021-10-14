import ACTIONS from "../../constants/reduxActions";
import { IPost } from "../../models/IPost";

export const createPost = (post: IPost) => ({
  type: ACTIONS.CREATE_POST,
  payload: post
});

export const editPost = (post: IPost) => ({
  type: ACTIONS.EDIT_POST,
  payload: post
});

export const deletePost = (postId: number) => ({
  type: ACTIONS.DELETE_POST,
  payload: postId
});

export default {
  createPost,
  editPost,
  deletePost
};