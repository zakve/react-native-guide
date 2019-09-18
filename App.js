import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  let pic = {
    uri: 'https://media.unisot.com/2018/08/38071612_1870705499639411_1924707641431425024_n.png'
  };
  return (
    <View style={styles.container}>
      <Image source={pic} style={{width: 267, height: 100}}/>
      <Text>Hello Martin!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
