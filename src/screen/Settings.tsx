import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';

const Settings = () => {
  return (
    <View style={styles.box}>
      <View style={styles.avatarBox}>
        <Avatar.Image
          size={100}
          source={{
            uri: 'https://play-lh.googleusercontent.com/y2v9w4KjUe4djmd3yYgj2_XrDIt_D9JO2c2NkYdxtYyE6cGl21JgU4aMqTEcoQzQorLD',
          }}
        />
        <View>
          <Text style={styles.avatarText}>Olá,</Text>
          <Text style={styles.avatarText}>Jhon Doe</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.optionsBox}>
          <MaterialCommunityIcons
            size={40}
            color="#347454"
            name="weather-sunny"
          />
          <Text style={styles.optionsText}>Mudar tema</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.optionsBox}>
          <MaterialCommunityIcons
            style={{marginLeft: 5}}
            size={30}
            color="#347454"
            name="logout"
          />
          <Text style={styles.optionsText}>Sair</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarBox: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 40,
    color: '#000',
    marginLeft: 20,
  },
  box: {
    flex: 1,
  },
  optionsBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    borderBottomColor: '#292826',
  },
  optionsText: {
    color: '#000',
    fontSize: 20,
    marginLeft: 20,
  },
});

export default Settings;
