import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoadingPage({ navigation }) {
  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigation.replace('Home'); 
    }, 3000);

    
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
        <ActivityIndicator size="large" color="#000000" styles={styles.customSize}/>
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
  customSize:{
    transform: [{ scale: 10 }],
  },
});