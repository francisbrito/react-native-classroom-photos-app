/* @flow weak */

import React from 'react';
import { Image, View, Text, StyleSheet, SectionList, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const data = [
  {
    title: 'June 10th',
    data: [
      [
        {
          uri:
            'https://images.unsplash.com/photo-1520658402001-b5960f9a6059?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670796b33630d3eff4b287840632a59&auto=format&fit=crop&w=2850&q=80',
        },
        {
          uri:
            'https://images.unsplash.com/photo-1520658402001-b5960f9a6059?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670796b33630d3eff4b287840632a59&auto=format&fit=crop&w=2850&q=80',
        },
        {
          uri:
            'https://images.unsplash.com/photo-1520658402001-b5960f9a6059?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670796b33630d3eff4b287840632a59&auto=format&fit=crop&w=2850&q=80',
        },
        {
          uri:
            'https://images.unsplash.com/photo-1520658402001-b5960f9a6059?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670796b33630d3eff4b287840632a59&auto=format&fit=crop&w=2850&q=80',
        },
        {
          uri:
            'https://images.unsplash.com/photo-1520658402001-b5960f9a6059?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670796b33630d3eff4b287840632a59&auto=format&fit=crop&w=2850&q=80',
        },
      ],
    ],
  },
];

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
const PhotoList = ({ photos }) => (
  <FlatList
    numColumns={4}
    data={photos}
    keyExtractor={item => item.uri}
    renderItem={({ item }) => <PhotoListItem {...item} />}
  />
);
const PhotoGallerySectionHeader = ({ title }) => (
  <Text style={{ fontWeight: 'bold' }}>{title}</Text>
);
const PhotoGallery = ({ sections, containerStyle }) => (
  <View style={[styles.container, containerStyle]}>
    <SectionList
      sections={data}
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

export default PhotoGallery;
