/* @flow weak */

import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CourseList, ActionButton } from '.';
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

@connect(mapStateToProps)
export default class CourseListScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Courses',
  };
  static propTypes = {
    courses: CourseList.propTypes.courses,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
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
        <StatusBar barStyle="light-content" backgroundColor={colors.DARK_PRIMARY_COLOR} />
        <View style={styles.courseListContainer}>
          <CourseList courses={courses} />
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
