 import { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import Input from '../input';
import Password from '../password';
import Button from '../button';
import ButtonAccount from '../buttonAccount';

const loadFonts = async () => {
  await Font.loadAsync({
    'AtkinsonHyperlegible': require('../../assets/fonts/AtkinsonHyperlegible-Regular.ttf'), 
  });
};
const handleForgotPassword = () => {
    console.log('q');
  };

export default function LoginPage() {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <LinearGradient
      colors={['#5a7d5a', '#89ad88']}
      start={{ x: 3, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.logo}>
        <Image style={styles.img} source={require('../../assets/Logo.png')} />
        <Text style={styles.text}>
          Seja Bem-Vindo
        </Text>
      </View>
      <View style={styles.input}>  
        <Image style={styles.icon} source={require('../../assets/icon.png')}/>
        <Input />
      </View>
      <View style={styles.input}>
        <Image style={styles.icon} source={require('../../assets/password.png')}/>
        <Password/>
      </View>
      <View>
      <TouchableOpacity onPress={handleForgotPassword} style={styles.button}>
        <Text style={styles.texts}>Esqueci a senha</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
       <Button/>
       <ButtonAccount/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttons:{
    padding: 80,
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: 20,  
  },
  texts: { 
    fontSize: 20,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    },
  icon: {
    marginTop: 20,
    width: 40,
    height: 40
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 50, 
  },
  text: {
    fontFamily: 'AtkinsonHyperlegible',
    fontSize: 25,
  },
  img: {
    height: 150,
    width: 150,
  },
  gradient: {
    flex: 1,
  },
});
