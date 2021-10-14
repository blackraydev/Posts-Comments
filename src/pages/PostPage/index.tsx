import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';
import { useActions } from '../../hooks/useActions';
import MainLayout from '../../layouts/MainLayout';
import { postsSelector } from '../../store/Posts/selectors';

interface IPostPageProps {
  route: any,
  navigation: any
}

const PostPage: React.FC<IPostPageProps> = ({ route, navigation }) => {
  const { post } = route.params;
  const posts = useSelector(postsSelector);
  const targetPost = posts.find(tempPost => tempPost.id === post.id);

  return (
    <MainLayout>
      { targetPost && <Post {...targetPost} navigation={navigation} isDetailViewMode /> }
    </MainLayout>
  )
}

export default PostPage;
