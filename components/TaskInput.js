import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('');

    const taskInputHandler = (enteredTask) => {
        setEnteredTask(enteredTask)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Add task..." style={styles.input} onChangeText={taskInputHandler} value={enteredTask} />
            <Button title="Add" onPress={props.onAddTask.bind(this, enteredTask)} />
        </View>
    )
};

const styles = StyleSheet.create({
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
})

export default TaskInput;