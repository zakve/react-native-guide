import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('');

    const taskInputHandler = (enteredTask) => {
        setEnteredTask(enteredTask)
    }

    const addTaskHandler = () => {
        props.onAddTask(enteredTask)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add task..."
                    style={styles.input}
                    onChangeText={taskInputHandler}
                    value={enteredTask}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addTaskHandler} />
                    </View>
                </View>
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
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    },
    button: {
        width: "40%"
    }
})

export default TaskInput;