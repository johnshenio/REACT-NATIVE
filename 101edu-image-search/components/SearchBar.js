import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchImages, handleInput } from '../store/actions/actions';

const SearchBar = () => {
	const dispatch = useDispatch();

	const imageData = useSelector(state => state.imgSearchData);
	const searchTerm = useSelector(state => state.searchTerm);

	const searchInputHandler = enteredText => {
		dispatch(handleInput(enteredText));
	};

	const searchImages = () => {
		dispatch(fetchImages(searchTerm, 1));
	};


	return (
		<View style={styles.searchContainer}>
			<TextInput 
				style={styles.textInput} 
				onChangeText={searchInputHandler}
				value={searchTerm} 
				placeholder="enter search"
			/>
			<Button
				style={styles.button}
				title="Search" 
				onPress={searchImages} 
				color='blue'
			/>			
		</View>
	);
}

const styles = StyleSheet.create({
	searchContainer: {
		flexDirection: 'row',
	},
	textInput: {
		borderBottomWidth: 1,
		borderColor: 'black'
	},
	button: {
	},
})

export default SearchBar;
