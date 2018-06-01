import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import * as icons from '../icons';
import * as colors from '../colors';

const styles = StyleSheet.create({
  container: {
    borderRadius: 56,
    elevation: 5,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ActionButton = ({ style, containerStyle, onPress }) => (
  <View style={[styles.container, containerStyle]}>
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#fff', true)}
    >
      <View style={[styles.button, { backgroundColor: colors.ACCENT_COLOR }, style]}>
        <Image source={icons.PICTURE_ICON} />
      </View>
    </TouchableNativeFeedback>
  </View>
);

ActionButton.propTypes = {
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
};

ActionButton.defaultProps = {
  style: null,
  containerStyle: null,
  onPress: () => {},
};

export default ActionButton;
