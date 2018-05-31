/* @flow weak */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

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

export default class CourseListScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Courses',
  };
  static propTypes = {
    courses: CourseList.propTypes.courses,
  };
  static defaultProps = {
    courses: [],
  };

  handleGoToTakePictureScreen = () => {
    this.props.navigation.navigate('TakePicture');
  }

  render() {
    const { courses } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.courseListContainer}>
          <CourseList courses={courses} />
        </View>
        <View style={styles.takePictureButtonContainer}>
          <TakePictureButton
            onPress={this.handleGoToTakePictureScreen}
            containerStyle={styles.takePictureButton}
          />
        </View>
      </View>
    );
  }
}
