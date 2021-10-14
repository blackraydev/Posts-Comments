import React, { useState } from 'react';
import { IComment } from '../../../models/IComment';
import * as UI from "./styles";
import CustomButton from '../../../UI/CustomButton';
import TITLES from '../../../constants/buttonTitles';
import COLORS from '../../../constants/colors';
import CustomInput from '../../../UI/CustomInput';
import { useActions } from '../../../hooks/useActions';

interface ICommentProps extends IComment {};

const ButtonStyles = {
  width: "45%"
};

const Comment: React.FC<ICommentProps> = ({
  id,
  postId,
  text
}) => {
  const { deleteComment, editComment } = useActions();

  const [editMode, setEditMode] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>(text);

  const editCommentHandler = () => {
    setEditMode(true);
  }

  const deleteCommentHandler = () => {
    alert(id)
    deleteComment(id);
  }

  const saveCommentHandler = () => {
    const edittedComment = {
      id,
      postId,
      text: newComment
    };
    
    editComment(edittedComment);
    setEditMode(false);
  }

  return (
    <UI.Comment>
      { 
        editMode
          ? <CustomInput 
              value={newComment}
              onChangeText={setNewComment}
              placeholder="Comment"
              styles={{ fontSize: "20px", width: "100%", border: `1px solid ${COLORS.MAIN}` }}
          />
          : <UI.Text>{newComment}</UI.Text>
      }
      <UI.ButtonsWrapper>
        <CustomButton 
          title={editMode ? TITLES.SAVE : TITLES.EDIT}
          onPress={editMode ? saveCommentHandler : editCommentHandler}
          styles={ButtonStyles}
          backgroundColor={editMode ? COLORS.GREEN : COLORS.PURPLE}
          disabled={editMode && !newComment}
        />
        <CustomButton 
          title={TITLES.DELETE}
          onPress={deleteCommentHandler}
          styles={ButtonStyles}
          backgroundColor={COLORS.RED}
        />
      </UI.ButtonsWrapper>
    </UI.Comment>
  );
};

export default Comment;
