/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TakePictureButton } from './src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  takePictureButton: {
    marginBottom: 16,
  },
});

const App = () => (
  <View style={styles.container}>
    <TakePictureButton containerStyle={styles.takePictureButton} />
  </View>
);

export default App;
