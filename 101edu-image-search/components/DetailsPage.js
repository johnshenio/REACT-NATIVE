import React, { useState } from 'react';
import { View, Image, Text, Modal, StyleSheet, TouchableHighlight, Button } from 'react-native';
import {  useSelector } from 'react-redux';

const DetailsPage = () => {
	const [visible, setVisible] = useState(false);

	const imgData = useSelector(state => state.imgData);

	return (
		<View style={styles.container}>
			<TouchableHighlight 
				onPress={() => setVisible(true)}>
					<Image style={styles.image} source={{uri: imgData.previewURL.toString()}}/>
			</TouchableHighlight>
			<Modal
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={() => {
					Alert.alert("has been closed")
				}}
			>
				<TouchableHighlight onPress={() => setVisible(false)}>
					<View styles={styles.outerModal}>
						<View style={styles.innerModal}>
							<Text>Uploaded by: {imgData.user}</Text>
							<Text>Resolution: {imgData.imageWidth} x {imgData.imageHeight}</Text>
							<Text>Tags: {imgData.tags}</Text>
						</View>
					</View>
				</TouchableHighlight>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop:100
	},
	image: {
		width: '80%',
		height: '80%',
		justifyContent: 'center',
		alignContent: 'center'
	},
	outerModal: {
		justifyContent: 'center',
		alignContent: 'center'
	},
	innerModal: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
	}
})

export default DetailsPage;



// props.imgData.imageURL.toString()