import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import IndexScreen from './scr/screens/IndexScreen';
import ShowScreen from './scr/screens/ShowScreen';
import CreateScreen from './scr/screens/CreateScreen';

import { Provider } from './scr/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
}, {
  initialRouteName: 'Index',
  defautNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};