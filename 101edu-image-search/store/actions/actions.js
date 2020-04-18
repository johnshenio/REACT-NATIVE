export const apiKey = process.env.API_KEY;
export const SET_IMAGES = 'SET_IMAGES';
export const HANDLE_INPUT = 'HANDLE_INPUT';
export const PASS_IMAGE_DATA = 'PASS_IMAGE_DATA';
export const FETCH_IMAGES_BEGIN   = 'FETCH_IMAGES_BEGIN';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';
export const DETECT_ORIENTATION = 'DETECT_ORIENTATION';


export const setImages = imgSearchData => {
	return {
		type: SET_IMAGES,
		imgSearchData: imgSearchData
	}
};

export const handleInput = searchTerm => {
	return {
		type: HANDLE_INPUT,
		searchTerm: searchTerm
	}
};

export const passImageData = imageData => {
	return {
		type: PASS_IMAGE_DATA,
		imageData: imageData
	}
};

export const fetchImagesBegin = (pgNo) => {
	return {
		type: FETCH_IMAGES_BEGIN,
		pgNo: pgNo
	}
};
 
 export const fetchImagesSuccess = (images, pgNo) => {
	return {
		type: FETCH_IMAGES_SUCCESS,
		images: images,
		pgNo: pgNo
	}
 };
 
 export const fetchImagesFailure = error => {
	return {
		type: FETCH_IMAGES_FAILURE,
		payload: { error }
	}
 };

 export const detectOrientation = orientation => {
	return {
		type: DETECT_ORIENTATION,
		orientation: orientation
	}
 };

 export const fetchImages = (searchTerm, pgNo) => {
	return dispatch => {
		dispatch(fetchImagesBegin(pgNo));

		return fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&page=${pgNo}&image_type=photo`)
			.then(res => res.json())
			.then(data => dispatch(fetchImagesSuccess(data.hits)))
			.catch(err => fetchImagesFailure(err))
	};
};

export const orientationDetection = (width, height) => {
	return dispatch => {
		if (width > height) {
			dispatch(detectOrientation('LANDSCAPE'));
		} else {
			dispatch(detectOrientation('PORTRAIT'));
		}
	}
}
