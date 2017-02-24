// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import canvas from './canvas';

const rootReducer = combineReducers({
	canvas,
	routing
});

export default rootReducer;
