import * as actionsType from '../actions/actionsType';

const initState = {
	image: '',
	height: 0,
	width: 0,
	rotation: 0
};


export default (state = initState, action) => {
	const {type} = action;

	switch(type) {
		case actionsType.UPDATE_CANVS_IMAGE:
			return {...state, image: action.image, height: action.height, width: action.width}
		default:
			return state;
	}
}