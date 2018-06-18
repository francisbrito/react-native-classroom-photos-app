/* @flow weak */

import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Course, CourseList, ActionButton } from '.';
import * as colors from '../colors';
import * as icons from '../icons';

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
    elevation: 5,
  },
  courseListContainer: {
    flex: 1,
  },
});

const mapStateToProps = ({ courses }) => ({ courses });

const convertCoursesMapToList = courseMap =>
  Object.keys(courseMap).map(tag => ({ ...courseMap[tag], tag, id: tag }));

@connect(mapStateToProps)
export default class CourseListScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Courses',
  };
  static propTypes = {
    courses: PropTypes.objectOf(PropTypes.shape(Course.propTypes)),
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  static defaultProps = {
    courses: [],
  };

  handleGoToTakePictureScreen = () => {
    this.props.navigation.navigate('TakePicture');
  };

  handleGoToCourseDetail = ({ tag: courseTag }) => {
    this.props.navigation.navigate('CourseDetail', { courseTag });
  };

  render() {
    const courses = convertCoursesMapToList(this.props.courses);

    return (
      <View style={styles.container}>
        <StatusBar animated barStyle="light-content" backgroundColor={colors.DARK_PRIMARY_COLOR} />
        <View style={styles.courseListContainer}>
          <CourseList onSelectCourse={this.handleGoToCourseDetail} courses={courses} />
        </View>
        <View style={styles.takePictureButtonContainer}>
          <ActionButton
            style={{ backgroundColor: colors.ACCENT_COLOR }}
            icon={icons.PICTURE_ICON}
            onPress={this.handleGoToTakePictureScreen}
            containerStyle={styles.takePictureButton}
          />
        </View>
      </View>
    );
  }
}
