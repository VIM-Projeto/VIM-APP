import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Button() {
  const navigation = useNavigation();  

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('Loading'); 
      }}
    >
      <Text style={styles.textButton}>Entrar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    alignItems: 'center',
    height: 50,
    padding: 13,
    marginBottom: 140,
  },
  textButton: {
    color: 'black',
    fontFamily: 'AtkinsonHyperlegible',
    fontSize: 16,
  },
});
