import * as actionsType from './actionsType';

const initState = {
	image: '',
};


export default (state = initState, action) => {
	const {type} = action;

	switch(type) {
		case actions.UPDATE_CANVS_IMAGE:
			return {...state, image: action.image}
		case default:
			return state;
	}
}