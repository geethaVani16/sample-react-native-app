import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = (props) => {
    const [enterGoal, setGoals] = useState('')
    const handleInputGoalChange = (text) => {
        setGoals(text)
    }
    const goalSubmit = () => {
        props.onGoalAdd(enterGoal)
        setGoals("")
    }


    return (
        <Modal visible={props.modalVisible} animationType='fade'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Course Goal'
                    onChangeText={handleInputGoalChange}
                    value={enterGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color='red' onPress={() => props.onCancel()} />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={goalSubmit} />
                    </View>

                </View>


            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: "60%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        width: "40%"
    }
})


export default GoalInput