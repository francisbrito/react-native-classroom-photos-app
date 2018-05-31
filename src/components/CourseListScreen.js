/* @flow weak */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { CourseList, TakePictureButton } from '.';

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

const CourseListScreen = () => (
  <View style={styles.container}>
    <View style={styles.courseListContainer}>
      <CourseList />
    </View>
    <View style={styles.takePictureButtonContainer}>
      <TakePictureButton containerStyle={styles.takePictureButton} />
    </View>
  </View>
);

export default CourseListScreen;
