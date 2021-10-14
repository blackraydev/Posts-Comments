import ACTIONS from "../../constants/reduxActions";
import { IPost } from "../../models/IPost";
import { GAction } from "../../types/reduxTypes";

interface IPostsState {
  posts: IPost[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: IPostsState = {
  posts: [],
  isLoading: false,
  hasError: false
};

type Action = 
  GAction<ACTIONS.CREATE_POST | ACTIONS.EDIT_POST, IPost> |
  GAction<ACTIONS.DELETE_POST, number> |
  GAction<ACTIONS.GET_ALL_POSTS, IPost[]> |
  GAction<ACTIONS.REQUEST_DATA | ACTIONS.RECEIVE_DATA | ACTIONS.REJECT_DATA>;

export default (
  state = initialState,
  action: Action
): IPostsState => {
  switch (action.type) {
    case ACTIONS.REQUEST_DATA:
      return { ...state, isLoading: true };
    case ACTIONS.RECEIVE_DATA:
      return { ...state, isLoading: false, hasError: false };
    case ACTIONS.REJECT_DATA:
      return { ...state, isLoading: false, hasError: true };
    case ACTIONS.GET_ALL_POSTS:
      return { ...state, posts: action.payload };
    case ACTIONS.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case ACTIONS.EDIT_POST:
      const edittedPosts = [...state.posts].map(post => post.id === action.payload.id ? action.payload : post);
      return { ...state, posts: edittedPosts };
    case ACTIONS.DELETE_POST:
      const filteredPosts = [...state.posts].filter(post => post.id !== action.payload);
      return { ...state, posts: filteredPosts };
    default: return state;
  };
};
