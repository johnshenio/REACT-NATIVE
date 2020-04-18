import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import actionsReducer from './store/reducers/reducers';
import AppContainer from './navigation/navigation';

const store = createStore(
	actionsReducer,
	applyMiddleware(thunk)
);

export default function App() {
	
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
   );
}


