/* @flow weak */

import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionButton } from '.';
import * as icons from '../icons';
import * as colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picture: {
    flex: 1,
  },
  controlsContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
  },
  controlsContainerBackground: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  captionInput: {
    color: colors.TEXT_COLOR,
  },
  confirmButtonContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    paddingRight: 16,
  },
  confirmButton: {
    backgroundColor: colors.ACCENT_COLOR,
  },
});

const mapStateToProps = ({ camera }) => ({ pictureUri: camera.uri });

@connect(mapStateToProps)
class PictureDetailScreen extends Component {
  static navigationOptions = { header: null };

  static propTypes = {
    pictureUri: PropTypes.string,
  };

  static defaultProps = {
    pictureUri: null,
  };

  componentWillUnmount() {
  }

  render() {
    const { pictureUri } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar translucent animated backgroundColor="transparent" />
        <Image style={styles.picture} source={{ uri: pictureUri }} />
        <View style={styles.controlsContainer} enabled behavior="padding">
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={styles.confirmButtonContainer}>
              <ActionButton
                containerStyle={{ zIndex: 999, elevation: 2 }}
                style={styles.confirmButton}
                icon={icons.ACCEPT_ICON}
              />
            </View>
            <View style={styles.controlsContainerBackground}>
              <TextInput
                placeholderTextColor={colors.TEXT_COLOR}
                placeholder="Add a caption..."
                style={styles.captionInput}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PictureDetailScreen;
