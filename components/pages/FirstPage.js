import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FirstPage({ navigation }) {
  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigation.replace('Login'); 
    }, 5000);

    
    return () => clearTimeout(timer);
  }, []); 

  return (
    <LinearGradient
      colors={['#5a7d5a', '#89ad88']} 
      start={{x: 3, y: 0}} 
      end={{x: 0, y: 1}}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/Logo.png')} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',  
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 400,
    width: 400,
  },
});
