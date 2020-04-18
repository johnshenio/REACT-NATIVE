import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableHighlight, Button } from 'react-native';


const DetailsModal = props => {
	return (
		<View style={styles.container}>
			<Modal
				animationType="slide"
				transparent={false}
				visible={props.visible}
				onRequestClose={() => {
					console.log('closed')
				}}
			>	
			<View styles={styles.modalContainer}>
				{/* <TouchableHighlight onPress={props.setVisible}> */}
					<Text>
						Uploaded by: {props.imgData.user}{"\n"}
						Resolution: {props.imgData.imageWidth} x {props.imgData.imageHeight}{"\n"}
						Tags: {props.imgData.tags}
					</Text>
					<Button title="close" onPress={props.setVisible} />
				{/* </TouchableHighlight> */}
			</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalContainer: {
		alignItems: 'center'
	}
})

export default DetailsModal;