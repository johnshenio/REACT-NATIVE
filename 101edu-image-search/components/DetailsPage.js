import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import {  useSelector } from 'react-redux';

import DetailsModal from './DetailsModal';

const DetailsPage = () => {
	const [visible, setVisible] = useState(false);

	const imgData = useSelector(state => state.imgData);

	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={() => setVisible(true)}>
				<Image 
					resizeMode={'contain'} 
					style={styles.image} 
					source={{uri: imgData.largeImageURL.toString()}}
				/>
			</TouchableHighlight>
			<DetailsModal visible={visible} imgData={imgData} setVisible={() => setVisible(false)}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		justifyContent: 'center'
	},
	image: {
		padding: 1,
		width: '100%',
		height: '100%',
	},
});

export default DetailsPage;