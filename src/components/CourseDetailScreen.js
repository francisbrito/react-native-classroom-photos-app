/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import { HeaderBackButton } from 'react-navigation';

import { PhotoGallery } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class CourseDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('courseTag', 'Untagged'),
    headerLeft: props => (
      <HeaderBackButton {...props} onPress={() => navigation.popToTop()} />
    ),
  });

  handleGoToCourseList = () => {
    this.props.navigation.popToTop();

    return true;
  };

  render() {
    return (
      <AndroidBackHandler onBackPress={this.handleGoToCourseList}>
        <View style={styles.container}>
          <PhotoGallery style={styles.container} sections={[]} />
        </View>
      </AndroidBackHandler>
    );
  }
}
