import React from 'react';
import { View, TouchableHighlight, StyleSheet, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import { passImageData } from '../store/actions/actions';

const height = Dimensions.get("window").height;

const imgHeight = height * .25;
const imgWidth = imgHeight;

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
	},
	image: {
		height: imgHeight,
		width: imgWidth,
		margin: 1,
		// justifyContent: 'center',
		// alignContent: 'center'
	}
});

export default ImageTemplate;