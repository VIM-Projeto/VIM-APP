import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';

export default function MapPage() {
  const [location, setLocation] = useState(null);
  const [microphoneOn, setMicrophoneOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de localização negada');
        return;
      }

      let locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (newLocation) => {
          const { latitude, longitude } = newLocation.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      );

      return () => locationSubscription.remove();
    })();
  }, []);

  const toggleMicrophone = () => {
    setMicrophoneOn(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      {}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise uma localização"
          placeholderTextColor="gray"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.mapContainer}>
        {location ? (
          <MapView style={styles.map} region={location} showsUserLocation={true}>
            <Marker coordinate={location} title="Você está aqui" />
          </MapView>
        ) : (
          <Text style={styles.mapText}>Obtendo localização...</Text>
        )}
      </View>

      {}
      <TouchableOpacity
        style={[styles.microphoneButton, { backgroundColor: microphoneOn ? 'green' : 'red' }]}
        onPress={toggleMicrophone}
      >
        <FontAwesome name="microphone" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    width: '90%',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: 'white', 
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignSelf: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 1,
  },
  searchInput: {
    fontSize: 16,
    color: 'black',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  microphoneButton: {
    position: 'absolute',
    bottom: 50,
    right: 185,
    padding: 20,
    borderRadius: 50,
    elevation: 5,
  },
});
