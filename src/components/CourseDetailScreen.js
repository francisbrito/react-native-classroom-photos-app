/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { PhotoGallery } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class CourseDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('courseTag', 'Untagged'),
  });

  render() {
    const { sections } = this.props;

    return (
      <View style={styles.container}>
        <PhotoGallery style={styles.container} sections={sections} />
      </View>
    );
  }
}
