import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    borderRadius: 56,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ActionButton = ({
  icon, iconStyle, style, containerStyle, onPress,
}) => (
  <View style={[styles.container, containerStyle]}>
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('#fff', true)}
    >
      <View style={[styles.button, style]}>
        <Image style={iconStyle} source={icon} />
      </View>
    </TouchableNativeFeedback>
  </View>
);

ActionButton.propTypes = {
  icon: PropTypes.number,
  iconStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
};

ActionButton.defaultProps = {
  icon: null,
  iconStyle: null,
  style: null,
  containerStyle: null,
  onPress: () => {},
};

export default ActionButton;
