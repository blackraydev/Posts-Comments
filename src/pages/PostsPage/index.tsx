import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';
import { useActions } from '../../hooks/useActions';
import MainLayout from '../../layouts/MainLayout';
import { postsErrorSelector, postsLoadingSelector, postsSelector } from '../../store/Posts/selectors';
import * as UI from './styles';

interface IPostsPageProps {
  navigation: any;
}

const PostsPage: React.FC<IPostsPageProps> = ({ navigation }) => {
  const { getAllPosts, getAllComments } = useActions();
  const posts = useSelector(postsSelector);
  const postsLoading = useSelector(postsLoadingSelector);
  const hasError = useSelector(postsErrorSelector);

  useEffect(() => {
    getAllPosts();
    getAllComments();
  }, []);

  useEffect(() => {
    if (hasError) console.log("Something went wrong...");
  }, [hasError]);

  return (
    <MainLayout>
      { 
        posts.length && !postsLoading
          ? posts.map((post, index) => <Post {...post} navigation={navigation} key={index} />)
          : postsLoading
            ? <UI.LoadingText>Loading posts...</UI.LoadingText>
            : <UI.Text>There are no posts yet...</UI.Text>
      }
      <CreatePost />
    </MainLayout>
  );
};

export default PostsPage;
