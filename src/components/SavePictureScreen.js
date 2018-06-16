/* @flow weak */

import React, { Component } from 'react';
import { View, StyleSheet, Image, TextInput, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import parseText from 'mention-hashtag';

import { ActionButton } from '.';
import * as icons from '../icons';
import * as colors from '../colors';
import * as actions from '../actions';

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

// TODO: support multiple hash-tags
const getCourseTagFromCaption = text => parseText(text, '#')[0];

const mapStateToProps = ({ camera }) => ({
  ...camera,
  pictureUri: camera.uri,
});
const mapDispatchToProps = {
  clearPicture: actions.clearPicture,
  savePicture: actions.savePicture,
  changeCourseTag: actions.changeCourseTag,
  changeCaption: actions.changeCaption,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class PictureDetailScreen extends Component {
  static navigationOptions = { header: null };

  static propTypes = {
    pictureSaved: PropTypes.bool,
    pictureUri: PropTypes.string,
    clearPicture: PropTypes.func,
    savePicture: PropTypes.func,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    courseTag: PropTypes.string,
    changeCourseTag: PropTypes.func,
    caption: PropTypes.string,
    changeCaption: PropTypes.func,
  };

  static defaultProps = {
    pictureSaved: false,
    pictureUri: null,
    clearPicture: () => {},
    savePicture: () => {},
    courseTag: '#untagged',
    changeCourseTag: () => {},
    caption: null,
    changeCaption: () => {},
  };

  componentWillUnmount() {
    if (!this.props.pictureSaved) {
      this.props.clearPicture();
    }
  }

  handleSavePicture = () => {
    const { pictureUri: uri, caption, courseTag } = this.props;

    this.props.savePicture({
      uri,
      caption,
      courseTag,
    });
    this.props.navigation.navigate('CourseDetail', { courseTag });
  };

  handleChangeCaption = (caption) => {
    const courseTag =
      getCourseTagFromCaption(caption) || PictureDetailScreen.defaultProps.courseTag;

    if (courseTag) {
      this.props.changeCourseTag(courseTag);
    }

    this.props.changeCaption(caption);
  };

  render() {
    const { pictureUri, caption } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar animated backgroundColor="#000" />
        <Image style={styles.picture} source={{ uri: pictureUri }} />
        <View style={styles.controlsContainer}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={styles.confirmButtonContainer}>
              <ActionButton
                containerStyle={{ zIndex: 999, elevation: 2 }}
                style={styles.confirmButton}
                icon={icons.ACCEPT_ICON}
                onPress={this.handleSavePicture}
              />
            </View>
            <View style={styles.controlsContainerBackground}>
              <TextInput
                autoCapitalize="sentences"
                placeholderTextColor={colors.TEXT_COLOR}
                placeholder="Add a caption..."
                style={styles.captionInput}
                underlineColorAndroid="transparent"
                value={caption}
                onChangeText={this.handleChangeCaption}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default PictureDetailScreen;
