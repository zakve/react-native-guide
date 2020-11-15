import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import * as Notifications from 'expo-notifications'
import * as Permissions from "expo-permissions";
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true
    }
  }
});

export default function App() {
  const [task, setTask] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)
  const [pushToken, setPushToken] = useState()

  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj => {
      if (statusObj.status !== 'granted') {
        return Permissions.askAsync(Permissions.NOTIFICATIONS);
      }
      return statusObj;
    }).then((statusObj) => {
      if (statusObj.status !== 'granted') {
        throw new Error('Permission not granted!')
      }
    }).then(() => {
      console.log('get Token')
      return Notifications.getExpoPushTokenAsync();
    }).then((response) => {
      const token = response.data;
      setPushToken(token)
    }).catch(err => {
      console.log(err)
      return null
    })
  }, [])

  useEffect(() => {
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    const foregroundSubscription = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification)
    })

    return () => {
      backgroundSubscription.remove()
      foregroundSubscription.remove()
    }
  }, [])

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

  const triggerNotificationHandler = () => {
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "First local notification",
    //     body: "This is the first local notification"
    //   },
    //   trigger: {
    //     seconds: 5
    //   }
    // });
    try {
      fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: pushToken,
          data: { extraData: 'My Data' },
          title: 'Sent via the app',
          body: 'This push notification was setn via the app!'
        })
      })
    } catch (error) {
      console.log(`Push POST token failed ${error.message}`)
      throw Error(error.message)
    }
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new task" onPress={() => setIsAddMode(true)} />
      <Button title='Push local notification' onPress={triggerNotificationHandler} />
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
