import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('');

    const taskInputHandler = (enteredTask) => {
        setEnteredTask(enteredTask)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Add task..." style={styles.input} onChangeText={taskInputHandler} value={enteredTask} />
                <Button title="Add" onPress={props.onAddTask.bind(this, enteredTask)} />
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
})

export default TaskInput;