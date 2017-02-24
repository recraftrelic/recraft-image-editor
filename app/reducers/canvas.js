import * as actionsType from '../actions/actionsType';

const initState = {
	image: '',
};


export default (state = initState, action) => {
	const {type} = action;

	switch(type) {
		case actionsType.UPDATE_CANVS_IMAGE:
			return {...state, image: action.image}
		default:
			return state;
	}
}