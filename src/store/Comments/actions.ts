import { Dispatch } from "redux";
import ACTIONS from "../../constants/reduxActions";
import { IComment } from "../../models/IComment";
import CommentsServices from "../../services/commentsServices";
import { receiveData, rejectData, requestData } from "../defaultActions";

export const getAllComments = () => async (dispatch: Dispatch) => {
  try {
    dispatch(requestData());

    const response = await CommentsServices.getAllComments();
    const data = response?.data;

    dispatch({ type: ACTIONS.GET_ALL_COMMENTS, payload: data });
    
    dispatch(receiveData());
  }
  catch (e) {
    dispatch(rejectData());
    console.log(e);
  }
};

export const createComment = (comment: IComment) => async (dispatch: Dispatch) => {
  try {
    dispatch(requestData());

    const response = await CommentsServices.createComment(comment);
    const data = response?.data;

    dispatch({ type: ACTIONS.CREATE_COMMENT, payload: data });
    dispatch(receiveData());
  }
  catch (e) {
    console.log(e);
    console.log(comment);
    dispatch({ type: ACTIONS.CREATE_COMMENT, payload: comment });
    dispatch(rejectData());
  }
};

export const editComment = (comment: IComment) => async (dispatch: Dispatch) => {
  try {
    dispatch(requestData());

    const response = await CommentsServices.editComment(comment);
    const data = response?.data;

    dispatch({ type: ACTIONS.EDIT_COMMENT, payload: data });
    dispatch(receiveData());
  }
  catch (e) {
    console.log(e);
    dispatch({ type: ACTIONS.EDIT_COMMENT, payload: comment });
    dispatch(rejectData());
  }
};

export const deleteComment = (commentId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(requestData());

    const response = await CommentsServices.deleteComment(commentId);
    const data = response?.data;

    dispatch({ type: ACTIONS.DELETE_COMMENT, payload: commentId });
    dispatch(receiveData());
  }
  catch (e) {
    console.log(e);
    dispatch({ type: ACTIONS.DELETE_COMMENT, payload: commentId });
    dispatch(rejectData());
  }
};

export const deleteSeveralComments = (postId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(requestData());

    const response = await CommentsServices.deleteSeveralComments(postId);
    const data = response?.data;

    dispatch({ type: ACTIONS.DELETE_SEVERAL_COMMENTS, payload: postId });
    dispatch(receiveData());
  }
  catch (e) {
    console.log(e);
    dispatch({ type: ACTIONS.DELETE_SEVERAL_COMMENTS, payload: postId });
    dispatch(rejectData());
  }
};


export default {
  getAllComments,
  createComment,
  editComment,
  deleteComment,
  deleteSeveralComments
};