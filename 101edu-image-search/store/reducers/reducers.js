import { 
	SET_IMAGES, 
	HANDLE_INPUT,  
	PASS_IMAGE_DATA,
	FETCH_IMAGES_BEGIN,
	FETCH_IMAGES_SUCCESS,
	FETCH_IMAGES_FAILURE, 
	FETCH_MORE_SUCCESS} from '../actions/actions';


const initialState = {
	imgSearchData: [],
	imgData: {},
	searchTerm: '',
	loading: false,
	error: null
};

const actionsReducer = (state = initialState, action) => {
	switch (action.type) {

		case HANDLE_INPUT:
			return {...state, searchTerm: action.searchTerm};

		case PASS_IMAGE_DATA:
			return {...state, imgData: action.imageData};

		case FETCH_IMAGES_BEGIN:
			return {...state, loading: true, error: null};

		case FETCH_IMAGES_SUCCESS:
			return {...state, loading: false, imgSearchData: action.images};

		case FETCH_MORE_SUCCESS:
			return {...state, loading: false, imgSearchData: [...imgSearchData, action.moreImages]}
		
		case FETCH_IMAGES_FAILURE:
			return {...state, loading: false, error: action.payload.error, items: []}

		default:
			return state;
	}
}

export default actionsReducer;
