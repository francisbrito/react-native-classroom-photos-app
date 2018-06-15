/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {
  CourseListScreen,
  TakePictureScreen,
  SavePictureScreen,
  CourseDetailScreen,
} from './src/components';
import { rootReducer } from './src/reducers';
import * as colors from './src/colors';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const RootNavigator = createStackNavigator(
  {
    CourseList: { screen: CourseListScreen },
    TakePicture: { screen: TakePictureScreen },
    SavePicture: { screen: SavePictureScreen },
    CourseDetail: { screen: CourseDetailScreen },
  },
  {
    initialRoute: 'CourseList',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.PRIMARY_COLOR,
      },
      headerTitleStyle: {
        color: colors.TEXT_COLOR,
      },
      headerTintColor: colors.TEXT_COLOR,
    },
  },
);

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
