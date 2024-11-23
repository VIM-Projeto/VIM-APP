import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native'; 

const loadFonts = async () => {
  await Font.loadAsync({
    'AtkinsonHyperlegible': require('../assets/fonts/AtkinsonHyperlegible-Regular.ttf'), 
  });
};

export default function ButtonAccount() {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('Cadastro'); 
      }}>
      <Text style={styles.textButton}>
        Criar conta
      </Text>
    </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
  button:{
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    alignItems: 'center',
    height: 50,
    padding: 13,
  },
  textButton:{
    color: 'black',
    fontFamily: 'AtkinsonHyperlegible',
    fontSize: 16,
  }
})