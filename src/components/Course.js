/* @flow weak */

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 180 - 16 - 8,
    marginRight: 4,
    marginLeft: 4,
    marginBottom: 4,
    marginTop: 4,
    elevation: 2,
    borderRadius: 4,
  },
});

const Course = ({ tag, containerStyle, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
    <Text style={{ textAlign: 'center' }}>{tag}</Text>
  </TouchableOpacity>
);

Course.propTypes = {
  tag: PropTypes.string.isRequired,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
};

Course.defaultProps = {
  containerStyle: null,
  onPress: () => {},
};

export default Course;
