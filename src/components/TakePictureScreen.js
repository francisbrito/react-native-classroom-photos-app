/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraPreview: {
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
        <RNCamera
          style={styles.cameraPreview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need your permission to use your camera phone"
        />
      </View>
    );
  }
}
