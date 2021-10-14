import React from 'react'
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import Comments from '../../components/Comments';
import Post from '../../components/Post';
import MainLayout from '../../layouts/MainLayout';
import { IPost } from '../../models/IPost';
import { postsLoadingSelector, postsSelector } from '../../store/Posts/selectors';
import * as UI from './styles';

interface IPostPageProps {
  route: any,
  navigation: any
}

const PostPage: React.FC<IPostPageProps> = ({ route, navigation }) => {
  const { post } = route.params;
  const posts = useSelector(postsSelector);
  const postLoading = useSelector(postsLoadingSelector);
  const targetPost = posts.find(tempPost => tempPost.id === post.id);

  return (
    <MainLayout>
      { 
        !postLoading && targetPost 
          ? <Post {...targetPost} navigation={navigation} isDetailViewMode />
          : <UI.LoadingText>Saving changes...</UI.LoadingText>
      }
      <Comments postId={targetPost?.id || post.id}/>
    </MainLayout>
  )
}

export default PostPage;
