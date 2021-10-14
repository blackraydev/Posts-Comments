import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import COLORS from '../../constants/colors';
import { useActions } from '../../hooks/useActions';
import { commentsSelector } from '../../store/Comments/selectors';
import CustomButton from '../../UI/CustomButton';
import CustomInput from '../../UI/CustomInput';
import * as UI from './styles';

interface ICreateCommentProps {
  postId: number;
}

const CreateComment: React.FC<ICreateCommentProps> = ({ postId }) => {
  const { createComment } = useActions();
  const comments = useSelector(commentsSelector);
  const [comment, setComment] = useState<string>("");

  const createCommentHandler = () => {
    const newComment = {
      id: comments[comments.length - 1]?.id + 3 | 0,
      postId,
      text: comment
    };

    createComment(newComment);
    setComment("");
  }

  return (
    <UI.CreateComment>
      <CustomInput 
        value={comment}
        onChangeText={setComment}
        placeholder="Comment"
        styles={{ width: "100%" }}
      />
      <CustomButton
        title="Create new comment"
        onPress={createCommentHandler}
        backgroundColor={COLORS.PURPLE}
        disabled={!comment}
        styles={{ width: "100%" }}
      />
    </UI.CreateComment>
  );
};

export default CreateComment;
