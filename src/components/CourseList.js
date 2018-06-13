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
  courseListContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
  courseListColumnWrapper: {
    justifyContent: 'space-between',
  },
  evenPositionItem: {
    marginRight: 4,
  },
  oddPositionItem: {
    marginLeft: 4,
  },
});

const coursePropType = PropTypes.shape({
  ...Course.propTypes,
  id: PropTypes.string.isRequired,
});

const renderItem = ({ item, index }) => (
  <Course
    {...item}
    containerStyle={[
      { marginTop: 4, marginBottom: 4 },
      index % 2 === 0 ? styles.evenPositionItem : styles.oddPositionItem,
    ]}
  />
);

renderItem.propTypes = {
  item: coursePropType.isRequired,
  index: PropTypes.number.isRequired,
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
      <FlatList
        columnWrapperStyle={styles.courseListColumnWrapper}
        contentContainerStyle={styles.courseListContainer}
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
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
