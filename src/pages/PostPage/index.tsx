import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Comments from '../../components/Comments';
import CreateComment from '../../components/CreateComment';
import Post from '../../components/Post';
import { useActions } from '../../hooks/useActions';
import MainLayout from '../../layouts/MainLayout';
import { postsLoadingSelector, postsSelector } from '../../store/Posts/selectors';
import * as UI from './styles';

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
      {
        targetPost && <Post {...targetPost} navigation={navigation} isDetailViewMode />
      }
      <Comments postId={targetPost?.id || post.id} />
      <CreateComment postId={targetPost?.id || post.id} />
    </MainLayout>
  )
}

export default PostPage;
