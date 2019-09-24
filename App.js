import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [task, setTask] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addTaskHandler = taskTile => {
    setTask([...task, { id: Math.random().toString(), value: taskTile }]);
    setIsAddMode(false)
  }

  const removeTaskHandler = taskId => {
    setTask(currentTask => {
      return (currentTask.filter((task) => task.id !== taskId))
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new task" onPress={() => setIsAddMode(true)} />
      <TaskInput
        visible={isAddMode}
        onAddTask={addTaskHandler}
        onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={task}
        renderItem={itemData => (
          <TaskItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeTaskHandler} />
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
