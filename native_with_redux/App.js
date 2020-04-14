import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = goal => {
		setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goal}]);
		setIsAddMode(false);
	};

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.key !== goalId);
		});
	};

	const cancelGoalAdd = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput 
				visible={isAddMode} 
				onAddGoal={addGoalHandler}
				onCancel={cancelGoalAdd} />
			<FlatList 
				data={courseGoals} 
				renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	}
});