/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

import { TakePictureButton } from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  takePictureButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  takePictureInnerButtonContainer: {
    marginBottom: 16,
    elevation: 0,
  },
  takePictureButton: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 5,
    borderRadius: 56,
  },
  confirmationViewButtonsContainer: {
    justifyContent: 'space-between',
  },
});

const mapStateToProps = ({ camera }) => ({ ...camera });
const mapDispatchToProps = {
  takePicture: actions.takePicture,
  takePictureStarted: actions.takePictureStarted,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class TakePictureScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    hasTakenPicture: PropTypes.bool,
    takePicture: PropTypes.func,
    takePictureStarted: PropTypes.func,
    uri: PropTypes.string,
  };

  static defaultProps = {
    hasTakenPicture: false,
    takePicture: () => {},
    takePictureStarted: () => {},
    uri: null,
  };

  componentDidMount() {
    this.props.takePictureStarted();
  }

  registerCameraRef = (ref) => {
    this.camera = ref;
  };

  handleTakePicture = () => {
    this.props.takePicture({ camera: this.camera });
  };

  renderPictureConfirmationView = () => (
    <View style={styles.container}>
      <Image style={styles.container} source={{ uri: this.props.uri }} />
      <View
        style={[styles.container, styles.confirmationViewButtonsContainer, StyleSheet.absoluteFill]}
      />
    </View>
  );

  renderPreview = () =>
    (this.props.hasTakenPicture ? (
      this.renderPictureConfirmationView()
    ) : (
      <View style={styles.container}>
        <RNCamera
          ref={this.registerCameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle="Permission to use camera"
          permissionDialogMessage="We need your permission to use your camera phone"
        />
        <View style={styles.takePictureButtonContainer}>
          <TakePictureButton
            style={styles.takePictureButton}
            onPress={this.handleTakePicture}
            containerStyle={styles.takePictureInnerButtonContainer}
          />
        </View>
      </View>
    ));

  render() {
    return <View style={styles.container}>{this.renderPreview()}</View>;
  }
}
