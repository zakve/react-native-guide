import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import BaseInput from './components/BaseInput';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add task..." style={styles.input} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
});
