import * as actionsType from '../actions/actionsType';

const initState = {
	image: '',
	height: 0,
	width: 0,
	rotation: 0,
	title: 'Upload a new image'
};


export default (state = initState, action) => {
	const {type} = action;

	switch(type) {
		case actionsType.UPDATE_CANVS_IMAGE:
			return {...state, image: action.image, height: action.height, width: action.width}
		case actionsType.UPDATE_CANVS_TITLE:
			return {...state, title: action.title}
		default:
			return state;
	}
}