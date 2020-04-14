// import {
// 	apiKey,
// 	SET_IMAGES,
// 	HANDLE_INPUT,
// 	PASS_IMAGE_DATA,
// 	FETCH_IMAGES_SUCCESS,
// 	FETCH_IMAGES_BEGIN,
// 	FETCH_IMAGES_FAILURE,
// } from '../../const/const';


export const apiKey = '15951050-904c4305bb9d2cd4fd0033860';
export const SET_IMAGES = 'SET_IMAGES';
export const HANDLE_INPUT = 'HANDLE_INPUT';
export const PASS_IMAGE_DATA = 'PASS_IMAGE_DATA';
export const FETCH_IMAGES_BEGIN   = 'FETCH_IMAGES_BEGIN';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const FETCH_MORE_SUCCESS = 'FETCH_MORE_SUCCESS';

export const setImages = imgSearchData => {
	return {
		type: SET_IMAGES,
		imgSearchData: imgSearchData
	};
};

export const handleInput = searchTerm => {
	return {
		type: HANDLE_INPUT,
		searchTerm: searchTerm
	};
};

export const passImageData = imageData => {
	return {
		type: PASS_IMAGE_DATA,
		imageData: imageData
	};
};

export const fetchImagesBegin = () => {
	return {
		type: FETCH_IMAGES_BEGIN,
	}
};
 
 export const fetchImagesSuccess = images => {
	return {
		type: FETCH_IMAGES_SUCCESS,
		images: images
	}
 };

 export const fetchMoreSuccess = images => {
	return {
		type: FETCH_MORE_SUCCESS,
		moreImages: images
	}
 };
 
 export const fetchImagesFailure = error => {
	return {
		type: FETCH_IMAGES_FAILURE,
		payload: { error }
	}
 };

 export const fetchImages = (searchTerm, pgNo) => {
	return dispatch => {
		dispatch(fetchImagesBegin());

		return fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&page=${pgNo}&image_type=photo`)
			.then(res => res.json())
			.then(data => dispatch(fetchImagesSuccess(data.hits)))
			.catch(err => fetchImagesFailure(err))
	}
};

export const fetchMoreImages = (searchTerm, pgNo) => {
	return dispatch => {
		dispatch(fetchImagesBegin());

		return fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&page=${pgNo}&image_type=photo`)
			.then(res => res.json())
			.then(data => dispatch(fetchMoreSuccess(data.hits)))
			.catch(err => fetchImagesFailure(err))
	}
};
