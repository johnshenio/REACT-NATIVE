import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Modal } from 'react-native';

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	}

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput 
					placeholder="Course Goal" 
					style={styles.textContainer} 
					onChangeText={goalInputHandler}
					value={enteredGoal}
					/>
				<View style={styles.buttonContainer}>
					<Button title="ADD" onPress={addGoalHandler} />
					<Button title="CANCEL" color='red' onPress={props.onCancel} />
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	textContainer: {
		width: '80%',
		marginBottom: 10,
		borderBottomColor: 'black',
		borderBottomWidth: 1
	},
	inputContainer: {  
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center' 
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: '30%'
	}
});

export default GoalInput;