import ACTIONS from "../../constants/reduxActions";
import { IComment } from "../../models/IComment";
import { GAction } from "../../types/reduxTypes";

interface ICommentsState {
  comments: IComment[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: ICommentsState = {
  comments: [],
  isLoading: false,
  hasError: false
};

type Action = 
  GAction<ACTIONS.CREATE_COMMENT | ACTIONS.EDIT_COMMENT, IComment> |
  GAction<ACTIONS.DELETE_COMMENT, number> |
  GAction<ACTIONS.REQUEST_DATA | ACTIONS.RECEIVE_DATA | ACTIONS.REJECT_DATA>;

export default (
  state = initialState,
  action: Action
): ICommentsState => {
  switch (action.type) {
    case ACTIONS.REQUEST_DATA:
      return { ...state, isLoading: true };
    case ACTIONS.RECEIVE_DATA:
      return { ...state, isLoading: false, hasError: false };
    case ACTIONS.REJECT_DATA:
      return { ...state, isLoading: false, hasError: true };
    case ACTIONS.CREATE_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    case ACTIONS.EDIT_COMMENT:
      const edittedComments = [...state.comments].map(comment => comment.id === action.payload.id ? action.payload : comment);
      return { ...state, comments: edittedComments };
    case ACTIONS.DELETE_COMMENT:
      const filteredComments = [...state.comments].filter(comment => comment.id !== action.payload);
      return { ...state, comments: filteredComments };
    default: return state;
  };
};
