import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TITLES from '../../constants/buttonTitles';
import COLORS from '../../constants/colors';
import { useActions } from '../../hooks/useActions';
import { IPost } from '../../models/IPost';
import { postsSelector } from '../../store/Posts/selectors';
import CustomButton from '../../UI/CustomButton';
import CustomInput from '../../UI/CustomInput';
import * as UI from './styles';

interface IPostProps extends IPost {
  navigation: any;
  isDetailViewMode?: boolean;
}

const ButtonStyles = {
  width: "45%"
};

const Post: React.FC<IPostProps> = ({
  id,
  title,
  body,
  navigation,
  isDetailViewMode
}) => {
  const { editPost, deletePost } = useActions();
  const posts = useSelector(postsSelector);
  
  const [targetPost, setTargetPost] = useState<IPost>({} as IPost);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newBody, setNewBody] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    const post = { id, title, body };
    setTargetPost(posts.find(tempPost => tempPost && tempPost.id === id) || post);
  }, [posts]);

  useEffect(() => {
    setNewTitle(targetPost.title);
    setNewBody(targetPost.body);
  }, [targetPost]);

  const editPostHandler = () => {
    setEditMode(true);
  };

  const savePostHandler = () => {
    const edittedPost = {
      id,
      title: newTitle,
      body: newBody
    };
    
    editPost(edittedPost);
    setEditMode(false);
  }

  const deletePostHandler = () => {
    if (isDetailViewMode) {
      navigation.navigate("Posts");
    }

    deletePost(id);
  }

  const redirectToPost = () => {
    const post = { id, newTitle, newBody };
    navigation.push("Post Detail View", { post });

    setEditMode(false);
    restoreData();
  }

  const restoreData = () => {
    setNewTitle(title);
    setNewBody(body);
  }

  const renderDefaultMode = () => (
    <>
      <UI.Title>{newTitle}</UI.Title>
      <UI.Body>{newBody}</UI.Body>
    </>
  );

  const renderEditMode = () => (
    <>
      <CustomInput 
        value={newTitle}
        onChangeText={setNewTitle}
        placeholder="Title"
        styles={{ fontSize: "30px", width: "100%", border: `1px solid ${COLORS.MAIN}` }}
      />
      <CustomInput 
        value={newBody}
        onChangeText={setNewBody}
        placeholder="Body"
        numberOfLines={4}
        multiline
        styles={{ height: '100px', fontSize: "16px", width: "100%", border: `1px solid ${COLORS.MAIN}`, }}
      />
    </>
  );
  
  return (
    <UI.Post>
      <UI.TextWrapper>
        {editMode ? renderEditMode() : renderDefaultMode()}
      </UI.TextWrapper>
      <UI.ButtonsWrapper>
        <CustomButton 
          title={editMode ? TITLES.SAVE : TITLES.EDIT}
          onPress={editMode ? savePostHandler : editPostHandler}
          styles={ButtonStyles}
          backgroundColor={editMode ? COLORS.GREEN : COLORS.PURPLE}
          disabled={editMode && (!newTitle || !newBody)}
        />
        <CustomButton 
          title={TITLES.DELETE}
          onPress={deletePostHandler}
          styles={ButtonStyles}
          backgroundColor={COLORS.RED}
        />
      </UI.ButtonsWrapper>
      {
        !isDetailViewMode && 
        <CustomButton 
          title={TITLES.DETAILED_VIEW}
          onPress={redirectToPost}
          backgroundColor={COLORS.PURPLE}
          styles={{ marginTop: "20px", width: "100%" }}
        />
      }
    </UI.Post>
  )
}

export default Post;
