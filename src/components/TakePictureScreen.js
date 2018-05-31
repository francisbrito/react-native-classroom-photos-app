/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class TakePictureScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the TakePictureScreen component</Text>
      </View>
    );
  }
}
