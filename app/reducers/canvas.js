import * as actionsType from '../actions/actionsType';

const initState = {
	image: '',
	height: 0,
	width: 0,
	rotation: 0,
	title: 'Upload a new image',
	brightness: 0,
	greyscale: 0,
	sepia: 0
};


export default (state = initState, action) => {
	const {type} = action;

	switch(type) {
		case actionsType.UPDATE_CANVS_IMAGE:
			return {...state, image: action.image, height: action.height, width: action.width}
		case actionsType.UPDATE_CANVS_TITLE:
			return {...state, title: action.title}
		case actionsType.UPDATE_BRIGHTNESS:
			return {...state, brightness: action.brightness}
		case actionsType.UPDATE_GREYSCALE:
			return {...state, greyscale: action.greyscale}
		case actionsType.UPDATE_SEPIA:
			return {...state, sepia: action.sepia}
		default:
			return state;
	}
}