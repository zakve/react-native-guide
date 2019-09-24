import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [task, setTask] = useState([]);

  const addTaskHandler = taskTile => {
    setTask([...task, { key: Math.random().toString(), value: taskTile }])
  }

  return (
    <View style={styles.screen}>
      <TaskInput onAddTask={addTaskHandler} />
      <FlatList data={task} renderItem={itemData => (
        <TaskItem title={itemData.item.value} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    padding: 50,
  }
});
