import * as actionsType from './actionsType';
import {calculateAspectRatioFit} from '../utils';

const updateCanvasImage = (image) => {
	return dispatch => {

		let new_image = new window.Image();
		new_image.src = image;

		new_image.onload = function () {
			let {width, height} = this;

			// max height or width 

			let maxWidth = width > 800 ? 800 : width;
			let maxHeight = height > 800 ? 800 : height;
			
			// calculate aspect ratio
			
			let new_dimensions = calculateAspectRatioFit(width, height, maxWidth, maxHeight);

			dispatch({
				type: actionsType.UPDATE_CANVS_IMAGE,
				image,
				height: new_dimensions.height,
				width: new_dimensions.width
			})
		}
	}
}

const updateTitle = (title) => {
	return dispatch => {
		dispatch({
			type: actionsType.UPDATE_CANVS_TITLE,
			title
		})
	}
}

const changeBrightness = (value) => {
	return dispatch => {
		dispatch({
			type: actionsType.UPDATE_BRIGHTNESS,
			brightness: value
		})
	}
}

const changeGreyscale = (value) => {
	return dispatch => {
		dispatch({
			type: actionsType.UPDATE_GREYSCALE,
			greyscale: value
		})
	}
}


const changeSepia = (value) => {
	return dispatch => {
		dispatch({
			type: actionsType.UPDATE_SEPIA,
			sepia: value
		})
	}
}

export default {
	updateCanvasImage,
	updateTitle,
	changeBrightness,
	changeGreyscale,
	changeSepia
}