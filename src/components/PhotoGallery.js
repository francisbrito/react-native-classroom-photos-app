/* @flow weak */

import React from 'react';
import { Image, View, Text, StyleSheet, SectionList, FlatList, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const PhotoListItem = ({ uri }) => (
  <View
    style={{
      height: 90 - 4,
      flex: 1,
      maxWidth: 90 - 4,
      marginLeft: 2,
      marginRight: 2,
      marginBottom: 2,
      marginTop: 2,
      elevation: 2,
    }}
  >
    <Image style={{ flex: 1 }} source={{ uri }} />
  </View>
);

PhotoListItem.propTypes = {
  uri: PropTypes.string,
};
PhotoListItem.defaultProps = {
  uri: null,
};

const PhotoList = ({ photos }) => (
  <FlatList
    numColumns={4}
    data={photos}
    keyExtractor={item => item.uri}
    renderItem={({ item }) => <PhotoListItem {...item} />}
  />
);
PhotoList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape(PhotoListItem.propTypes)),
};
PhotoList.defaultProps = {
  photos: [],
};

const PhotoGallerySectionHeader = ({ title }) => (
  <Text style={{ fontWeight: 'bold' }}>{title}</Text>
);
PhotoGallerySectionHeader.propTypes = {
  title: PropTypes.string,
};
PhotoGallerySectionHeader.defaultProps = {
  title: null,
};

const PhotoGallery = ({ sections, containerStyle }) => (
  <View style={[styles.container, containerStyle]}>
    <SectionList
      sections={sections}
      contentContainerStyle={{
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 2,
        paddingLeft: 2,
      }}
      keyExtractor={item => item.title}
      renderItem={({ item: photos }) => <PhotoList photos={photos} />}
      renderSectionHeader={({ section: { title } }) => <PhotoGallerySectionHeader title={title} />}
    />
  </View>
);
PhotoGallery.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shapeOf({
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(PhotoListItem.propTypes))),
  })),
  containerStyle: ViewPropTypes.style,
};
PhotoGallery.defaultProps = {
  sections: [],
  containerStyle: null,
};

export default PhotoGallery;
