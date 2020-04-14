import React from 'react';
import { View, TouchableHighlight, StyleSheet, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import { passImageData } from '../store/actions/actions';

const ImageTemplate = props => {
	const dispatch = useDispatch();

	const displayDetail = () => {
		dispatch(passImageData(props.imgDataFull));
		props.navigation();
	};

	return (
		<TouchableHighlight
			activeOpacity={0.6}
			onPress={() => displayDetail()}>
			<View style={styles.container}>
				<Image style={styles.image} source={{uri: props.imageSource.toString()}}/>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
	image: {
		width: 150,
		height: 150,
		marginLeft: 10
	}
});

export default ImageTemplate;