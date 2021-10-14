import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux';
import COLORS from '../../constants/colors';
import { useActions } from '../../hooks/useActions';
import { postsSelector } from '../../store/Posts/selectors';
import CustomButton from '../../UI/CustomButton';
import CustomInput from '../../UI/CustomInput';
import * as UI from './styles';

const CreatePost: React.FC = () => {
  const { createPost } = useActions();
  const posts = useSelector(postsSelector);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const createPostHandler = () => {
    const newPost = {
      id: posts[posts.length - 1]?.id + 1 | 0,
      title,
      body
    };

    createPost(newPost);
    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setBody("");
  }

  return (
    <UI.Wrapper>
      <CustomInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <CustomInput
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        numberOfLines={4}
        multiline
        styles={{ height: '100px' }}
      />
      <CustomButton
        title="Create new post"
        onPress={createPostHandler}
        backgroundColor={COLORS.PURPLE}
        disabled={!title || !body}
      />
    </UI.Wrapper>
  )
}

export default CreatePost;
