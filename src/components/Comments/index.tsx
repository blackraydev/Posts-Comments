import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { IComment } from '../../models/IComment';
import { commentsLoadingSelector, commentsSelector } from '../../store/Comments/selectors';
import Comment from './Comment';
import * as UI from './styles';

interface ICommentsProps {
  postId: number;
}

const Comments: React.FC<ICommentsProps> = ({ postId }) => {
  const comments = useSelector(commentsSelector);
  const commentsLoading = useSelector(commentsLoadingSelector);
  const [targetComments, setTargetComments] = useState<IComment[]>([]);

  useEffect(() => {
    if (comments && comments.length > 0) {
      const filteredComments = comments.filter(comment => comment && comment.postId === postId);
      setTargetComments(filteredComments);
    }
  }, [comments]);
  
  return (
    <UI.CommentsWrapper>
      <UI.Text>Comments ({targetComments && targetComments.length})</UI.Text>
      { 
        commentsLoading
          ? <UI.LoadingText>Comments loading...</UI.LoadingText>
          : targetComments.map((comment: IComment) => <Comment {...comment} key={comment.id}/>)
      }
    </UI.CommentsWrapper>
  )
}

export default Comments;
