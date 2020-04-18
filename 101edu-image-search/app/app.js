import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../components/SearchBar';
import ListofImages from '../components/ListofImages';
import { orientationDetection } from '../store/actions/actions';


export default function ImageApp(props){
	const dispatch = useDispatch();

	const detailsNavigation = () => {
		props.navigation.navigate('DetailsPage');
	};

	const onLayout = event => {
		const {height, width} = event.nativeEvent.layout;

		console.log(height, width);

		dispatch(orientationDetection(width, height));
	};

	return (
		<View
			onLayout={(event) => onLayout(event)} 
			style={styles.container}>
			<SearchBar />
			<ListofImages navigation={detailsNavigation} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		alignItems: 'center'
	},
	button: {
		bottom: 0
	}
 });

