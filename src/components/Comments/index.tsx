import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { IComment } from '../../models/IComment';
import { commentsSelector } from '../../store/Comments/selectors';
import Comment from './Comment';
import * as UI from './styles';

interface ICommentsProps {
  postId: number;
}

const Comments: React.FC<ICommentsProps> = ({ postId }) => {
  const { getAllComments } = useActions();
  const comments = useSelector(commentsSelector);
  const [targetComments, setTargetComments] = useState<IComment[]>([]);

  useEffect(() => {
    alert(postId)
    getAllComments();
  }, []);

  useEffect(() => {
    if (comments && comments.length) {
      const filteredComments = comments.filter(comment => comment.postId === postId);
      setTargetComments(filteredComments);
    }
  }, [comments]);
  
  return (
    <UI.CommentsWrapper>
      <UI.Text>Comments ({comments.length})</UI.Text>
      { targetComments.map((comment: IComment) => <Comment {...comment} />) }
    </UI.CommentsWrapper>
  )
}

export default Comments;
