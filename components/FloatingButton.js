import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

// constants
import Colors from '../constants/Colors'

const FloatingButton = ({ iconName, ...props }) => {
    return (
        <Icon
            name={iconName}
            size={30}
            color={Colors.primary}
            reverse
            containerStyle={styles.buttonContainer}
            onPress={props.onPress}
        />
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})

export default FloatingButton