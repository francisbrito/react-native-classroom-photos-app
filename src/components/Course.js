/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Course = ({ name }) => (
  <View style={styles.container}>
    <Text>{name}</Text>
  </View>
);

Course.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Course;
