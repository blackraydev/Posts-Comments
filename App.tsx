import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import COLORS from './src/constants/colors';
import PostPage from './src/pages/PostPage';
import PostsPage from './src/pages/PostsPage';
import store from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Posts">
          <Stack.Screen
            name="Posts"
            component={PostsPage}
            options={{ 
              headerStyle: { backgroundColor: COLORS.MAIN },
              headerTintColor: COLORS.TEXT_MAIN,
              headerTitleStyle: { fontWeight: "bold" }
            }}
          />
          <Stack.Screen
            name="Post Detail View"
            component={PostPage}
            options={{ 
              headerStyle: { backgroundColor: COLORS.MAIN },
              headerTintColor: COLORS.TEXT_MAIN,
              headerTitleStyle: { fontWeight: "bold" }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
