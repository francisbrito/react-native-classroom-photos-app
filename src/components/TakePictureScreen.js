/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as icons from '../icons';
import * as colors from '../colors';

import { ActionButton } from '.';

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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  confirmationViewButton: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
  confirmationButtonIcon: {
    width: 36,
    height: 36,
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
    this.props.navigation.navigate('SavePicture');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent animated />
        <View style={styles.container}>
          <RNCamera
            ref={this.registerCameraRef}
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
          />
          <View style={styles.takePictureButtonContainer}>
            <ActionButton
              icon={icons.PICTURE_ICON}
              style={styles.takePictureButton}
              onPress={this.handleTakePicture}
              containerStyle={styles.takePictureInnerButtonContainer}
            />
          </View>
        </View>
      </View>
    );
  }
}
