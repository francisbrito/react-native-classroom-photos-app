/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CourseList, TakePictureButton } from './src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  takePictureButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  takePictureButton: {
    marginBottom: 16,
  },
  courseListContainer: {
    flex: 1,
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.courseListContainer}>
      <CourseList />
    </View>
    <View style={styles.takePictureButtonContainer}>
      <TakePictureButton containerStyle={styles.takePictureButton} />
    </View>
  </View>
);

export default App;
