import defaultActions from './defaultActions';
import postsActions from './Posts/actions';
import commentsActions from './Comments/actions';

export default {
  ...defaultActions,
  ...postsActions,
  ...commentsActions
};