import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Password() {
  const [text, onChangeText] = useState('');
  const [errorSenha] = useState('null');
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder="Senha"
      keyboardType="default"
      secureTextEntry={true}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
    width: '80%',
    borderRadius: 10,
    marginLeft: 4,
    backgroundColor: '#d9d9d9'
  },
});
