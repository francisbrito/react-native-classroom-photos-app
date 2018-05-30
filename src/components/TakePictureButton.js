import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View, Image, ViewPropTypes } from 'react-native';

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

const ActionButton = ({ containerStyle }) => (
  <View style={[styles.container, containerStyle]}>
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#fff', true)}>
      <View style={[styles.button, { backgroundColor: colors.ACCENT_COLOR }]}>
        <Image source={icons.PICTURE_ICON} />
      </View>
    </TouchableNativeFeedback>
  </View>
);

ActionButton.propTypes = {
  containerStyle: ViewPropTypes.style,
};

ActionButton.defaultProps = {
  containerStyle: null,
};

export default ActionButton;
