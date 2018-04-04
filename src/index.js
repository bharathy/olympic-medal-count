import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MedalCount from './components/MedalCount';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const init = (elementId, sortBy) => {
	const initialState = {
		medals: { sortBy: sortBy || 'gold' }
	};
	const store = createStoreWithMiddleware(reducers, initialState);

	ReactDOM.render(
	<Provider store={ store }>
		<MedalCount />
	</Provider>, document.getElementById(elementId)
	);
}
