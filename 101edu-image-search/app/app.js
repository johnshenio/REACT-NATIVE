import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../components/SearchBar';
import ImageTemplate from '../components/ImageTemplate';
import { fetchImages } from '../store/actions/actions';


export default function ImageApp(props){
	const dispatch = useDispatch();

	const imgSearchData = useSelector(state => state.imgSearchData);
	const searchTerm = useSelector(state => state.searchTerm);

	const [pgNo, setPgNo] = useState(1);


	const detailsNavigation = () => {
		props.navigation.navigate('DetailsPage');
	};

	const handleLoadMore = () => {
		setPgNo(pgNo +1);
		dispatch(fetchImages(searchTerm, pgNo));
	};

	return (
		<View 
			style={styles.container}
		>
			<SearchBar />
			<FlatList
				numColumns={2}
				data={imgSearchData}
				extraData={imgSearchData}
				renderItem={({item}) => (<ImageTemplate imageSource={item.previewURL} imgDataFull={item} navigation={detailsNavigation}/>)}
				keyExtractor={item => item.id.toString()}
				initialNumToRender={6}
				onEndReached={() => handleLoadMore()}
				onEndReachedThreshold={.5}
				/>
			<Button title="test" onPress={()=> console.log(imgSearchData.length)}/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		bottom: 0
	}
 });