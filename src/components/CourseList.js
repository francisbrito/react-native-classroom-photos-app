/* @flow weak */

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';

import { Course } from '.';
import * as icons from '../icons';
import * as colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 96,
    height: 96,
  },
  emptyCourseListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCourseListText: {
    fontSize: 16,
    color: colors.SECONDARY_TEXT_COLOR,
  },
});

const coursePropType = PropTypes.shape({
  ...Course.propTypes,
  id: PropTypes.string.isRequired,
});

const renderItem = ({ item }) => <Course key={item.id} {...item} />;

renderItem.propTypes = {
  item: coursePropType.isRequired,
};

const renderEmptyCourseList = () => (
  <View style={styles.emptyCourseListContainer}>
    <Image
      style={styles.icon}
      tintColor={colors.SECONDARY_TEXT_COLOR}
      source={icons.LARGE_SUN_ICON}
    />
    <Text style={styles.emptyCourseListText}>Add new courses by taking pictures</Text>
  </View>
);

const CourseList = ({ courses }) => (
  <View style={styles.container}>
    {courses.length > 0 ? (
      <FlatList data={courses} renderItem={renderItem} numColumns={2} />
    ) : (
      renderEmptyCourseList()
    )}
  </View>
);

CourseList.propTypes = {
  courses: PropTypes.arrayOf(coursePropType),
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
