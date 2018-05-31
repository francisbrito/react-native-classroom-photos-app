/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import { CourseListScreen } from './src/components';
import { rootReducer } from './src/reducers';
import * as colors from './src/colors';

const store = createStore(rootReducer);

const RootNavigator = createStackNavigator(
  {
    CourseList: { screen: CourseListScreen },
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
    },
  },
);

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
