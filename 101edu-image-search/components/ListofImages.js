import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ImageTemplate from './ImageTemplate';
import { fetchImages } from '../store/actions/actions';

const ListofImages = (props) => {
	const dispatch = useDispatch();

	let imgSearchData = useSelector(state => state.imgSearchData);
	const searchTerm = useSelector(state => state.searchTerm);
	const pgNo = useSelector(state => state.pgNo);

	const handleLoadMore = () => {
		const pgNum = pgNo + 1;
		dispatch(fetchImages(searchTerm, pgNum));
	};

	return (
		<>
			<FlatList
				numColumns={2}
				contentContainerStyle={styles.list}
				data={imgSearchData}
				extraData={imgSearchData}
				renderItem={({item}) => (<ImageTemplate imageSource={item.previewURL} imgDataFull={item} navigation={props.navigation}/>)}
				keyExtractor={item => item.id.toString()}
				initialNumToRender={20}
				onEndReached={() => handleLoadMore()}
				onEndReachedThreshold={.5}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	list: {
		alignItems: 'center'
	},
});

export default ListofImages;