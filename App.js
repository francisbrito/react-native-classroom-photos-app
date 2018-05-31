/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { CourseListScreen } from './src/components';
import { rootReducer } from './src/reducers';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <CourseListScreen />
  </Provider>
);

export default App;
