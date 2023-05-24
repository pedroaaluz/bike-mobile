import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import MapView from 'react-native-maps';

export default function Map() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.overlay}>
        <TextInput
          value={text}
          onChangeText={t => setText(t)}
          label="Procurar local"
          mode="flat"
          style={styles.input}
          right={<TextInput.Icon icon={'eye'} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    color: '#000',
  },
});
