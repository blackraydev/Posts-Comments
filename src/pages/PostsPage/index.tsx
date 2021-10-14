import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Post';
import MainLayout from '../../layouts/MainLayout';
import { postsSelector } from '../../store/Posts/selectors';
import * as UI from './styles';

interface IPostsPageProps {
  navigation: any;
}

const PostsPage: React.FC<IPostsPageProps> = ({ navigation }) => {
  const posts = useSelector(postsSelector);

  return (
    <MainLayout>
      { 
        posts.length 
          ? posts.map(post => <Post navigation={navigation} {...post} key={post.id} />)
          : <UI.Text>There are no posts yet...</UI.Text>
      }
      <CreatePost />
    </MainLayout>
  );
};

export default PostsPage;
