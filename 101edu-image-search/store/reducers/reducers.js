import { 
		HANDLE_INPUT,  
		PASS_IMAGE_DATA,
		FETCH_IMAGES_BEGIN,
		FETCH_IMAGES_SUCCESS,
		FETCH_IMAGES_FAILURE, 
	} from '../actions/actions';


const initialState = {
	imgSearchData: [],
	imgData: {},
	searchTerm: '',
	pgNo: 1,
	loading: false,
	error: null,
	orientation: '',
	heightLayout: '',
	widthLayout: '',
};

const actionsReducer = (state = initialState, action) => {
	switch (action.type) {

		case HANDLE_INPUT:
			return {...state, searchTerm: action.searchTerm};

		case PASS_IMAGE_DATA:
			return {...state, imgData: action.imageData};

		case FETCH_IMAGES_BEGIN:
			return {...state, pgNo: action.pgNo, loading: true, error: null};

		case FETCH_IMAGES_SUCCESS:
			if(state.pgNo === 1){
				return {...state, loading: false, imgSearchData: action.images};
			} else {
				let imagesArray = action.images;
				let newImagesArray = [...state.imgSearchData, ...imagesArray];

				return {...state, loading: false, imgSearchData: newImagesArray};
			};
		
		case FETCH_IMAGES_FAILURE:
			return {...state, loading: false, error: action.payload.error, items: []}

		default:
			return state;
	}
}

export default actionsReducer;
