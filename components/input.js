import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input() {
  const [text, onChangeText] = useState('');

  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder="Usuário"
      keyboardType="default"

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
