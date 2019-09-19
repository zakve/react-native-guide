import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import BaseInput from './components/BaseInput';

export default function App() {
  let pic = {
    uri: 'https://media.unisot.com/2018/08/38071612_1870705499639411_1924707641431425024_n.png'
  };

  async function getMoviesFromApi() {
    try {
      let response = await fetch(
        'https://facebook.github.io/react-native/movies.json',
      );
      let responseJson = await response.json();
      alert(responseJson.description);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={pic} style={{ width: 267, height: 100 }} />
      <Text style={styles.title}>Hello Martin!</Text>
      <BaseInput />
      <Button
        onPress={() => {
          getMoviesFromApi();
        }}
        title="Async GET btn"
      />
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
  title: {
    color: '#002144',
  }
});
