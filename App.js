import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import BaseInput from './components/BaseInput';

export default function App() {
  const [enteredTask, setEnteredTask] = useState('');
  const [task, setTask] = useState([]);

  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask)
  }

  const addTaskHandler = () => {
    setTask([...task, enteredTask])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add task..." style={styles.input} onChangeText={taskInputHandler} value={enteredTask} />
        <Button title="Add" onPress={addTaskHandler} />
      </View>
      <View>
        {task.map((task) =>
          <View key={task} style={styles.listItem}>
            <Text key={task}>{task}</Text>
          </View>)}
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
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black'
  }
});
