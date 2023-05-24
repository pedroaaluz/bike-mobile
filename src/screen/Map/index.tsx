import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default function Map() {
  return (
    <View>
      <MapView style={{height: '100%', width: '100%'}} />
      <Text>ewr</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
