import { combineReducers } from 'redux';
import medalReducer from './medalReducer';

export default combineReducers({
	medals: medalReducer
});