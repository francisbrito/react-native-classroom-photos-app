/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import { HeaderBackButton } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as R from 'ramda';

import { Course, PhotoGallery } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = ({ courses }) => ({ courses });

const adaptCoursePhotosToGallerySections = photos =>
  R.pipe(
    R.groupBy(ts => moment(ts).format('LL')),
    R.toPairs,
    R.map(([title, data]) => ({ title, data: [data] })),
  )(photos);

@connect(mapStateToProps)
export default class CourseDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('courseTag', '#untagged'),
    headerLeft: props => <HeaderBackButton {...props} onPress={() => navigation.popToTop()} />,
  });

  static propTypes = {
    courses: PropTypes.objectOf(PropTypes.shape(Course.propTypes)).isRequired,
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      popToTop: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleGoToCourseList = () => {
    this.props.navigation.popToTop();

    return true;
  };

  render() {
    const { courses } = this.props;
    const courseTag = this.props.navigation.getParam('courseTag', '#untagged');
    const selectedCourse = courses[courseTag];
    const sections = adaptCoursePhotosToGallerySections(selectedCourse.photos);

    return (
      <AndroidBackHandler onBackPress={this.handleGoToCourseList}>
        <View style={styles.container}>
          <PhotoGallery style={styles.container} sections={sections} />
        </View>
      </AndroidBackHandler>
    );
  }
}
