import React, { Text, View } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <View>
      <MapView style={{ height: '100%', width: '100%' }} />
      <Text>Map</Text>
    </View>
  );
};

export default Map;
