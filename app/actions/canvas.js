import * as actionsType from './actionsType';

const updateCanvasImage = (image) => {
	return dispatch => {
		dispatch({
			type: actionsType.UPDATE_CANVS_IMAGE,,
			image
		})
	}
}

export default {
	updateCanvasImage
}