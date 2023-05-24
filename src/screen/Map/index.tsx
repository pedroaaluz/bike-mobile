import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_DEFAULT} from 'react-native-maps';

export default function Map() {
  return (
    <View>
      <MapView provider={PROVIDER_DEFAULT} />
    </View>
  );
}
