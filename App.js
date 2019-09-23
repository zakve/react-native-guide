import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import BaseInput from './components/BaseInput';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput placeholder="Add task..." style={styles.input} />
        <Button title="Add" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    paddingLeft: 10,
    paddingRight: 10
  }
});
