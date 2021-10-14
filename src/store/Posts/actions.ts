import { Dispatch } from "redux";
import ACTIONS from "../../constants/reduxActions";
import { IPost } from "../../models/IPost";
import PostsServices from "../../services/postsServices";
import { rejectData, requestData, receiveData } from "../defaultActions";

export const getAllPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestData());

    const response = await PostsServices.getAllPosts();
    const data = response?.data;

    dispatch({ type: ACTIONS.GET_ALL_POSTS, payload: data });
    
    dispatch(receiveData());
  }
  catch (e) {
    dispatch(rejectData());
    console.log(e);
  }
};

export const getPost = (postId: number) => async (dispatch: Dispatch): Promise<any> => {
  try {
    const response = await PostsServices.getPost(postId);
    const data = response?.data;
    
    return data;
  }
  catch (e) {
    console.log(e);
  }
}

export const createPost = (post: IPost) => async (dispatch: Dispatch) => {
  try {
    const response = await PostsServices.createPost(post);
    const data = response?.data;

    dispatch({ type: ACTIONS.CREATE_POST, payload: data });
  }
  catch (e) {
    console.log(e);
    dispatch({ type: ACTIONS.CREATE_POST, payload: post });
  }
};

export const editPost = (post: IPost) => async (dispatch: Dispatch) => {
  try {
    const response = await PostsServices.editPost(post);
    const data = response?.data;

    dispatch({ type: ACTIONS.EDIT_POST, payload: data });
  }
  catch (e) {
    console.log(e);
    dispatch({ type: ACTIONS.EDIT_POST, payload: post });
  }
};

export const deletePost = (postId: number) => async (dispatch: Dispatch) => {
  try {
    const response = await PostsServices.deletePost(postId);
    const data = response?.data;

    dispatch({ type: ACTIONS.DELETE_POST, payload: postId });
  }
  catch (e) {
    console.log(e);
    dispatch({ type: ACTIONS.DELETE_POST, payload: postId });
  }
};

export default {
  getAllPosts,
  getPost,
  createPost,
  editPost,
  deletePost
};