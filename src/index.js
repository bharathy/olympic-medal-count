import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import MedalCount from './components/MedalCount';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export const init = (elementId, sortBy) => {
	ReactDOM.render(
	<Provider store={ store }>
		<MedalCount sortBy = { sortBy } />
	</Provider>, document.getElementById(elementId)
	);
}
