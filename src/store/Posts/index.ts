import ACTIONS from "../../constants/reduxActions";
import { IPost } from "../../models/IPost";
import { GAction } from "../../types/reduxTypes";

interface IPostsState {
  posts: IPost[];
}

const initialState: IPostsState = {
  posts: []
}

type Action = 
  GAction<ACTIONS.CREATE_POST | ACTIONS.EDIT_POST, IPost> |
  GAction<ACTIONS.DELETE_POST, number>;

export default (
  state = initialState,
  action: Action
): IPostsState => {
  switch (action.type) {
    case ACTIONS.CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case ACTIONS.EDIT_POST:
      const edittedPosts = [...state.posts].map(post => post.id === action.payload.id ? action.payload : post);
      return { ...state, posts: edittedPosts };
    case ACTIONS.DELETE_POST:
      const filteredPosts = [...state.posts].filter(post => post.id !== action.payload);
      return { ...state, posts: filteredPosts };
    default: return state;
  };
};
