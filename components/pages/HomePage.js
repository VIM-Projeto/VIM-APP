import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Image } from 'react-native';
import Buttonmap from '../buttonmap';

export default function Home() {
  return (
    <LinearGradient
      colors={['#5a7d5a', '#89ad88']}
      start={{ x: 3, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      {}
      <Image
        source={require('../../assets/Logo.png')}
        style={styles.logo}
      />

      {}
      <Buttonmap onPress={() => console.log('Abrir Mapa Pressionado')} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 100,
    width: 250,
    height: 250,
  },
});
