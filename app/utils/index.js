import fs from 'fs';
import {remote} from 'electron';

const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {

    let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };

}

const saveDialog = (cb) => {
	const {dialog} = remote; // get dialog out of remote

	return dialog.showSaveDialog((fileName) => {
		if(fileName === undefined){
			alert('file not saved');
			return;
		}

		// call the callback with filename

		cb(fileName);
	})
}

const saveImage = (filename, data) => {
	fs.writeFile(filename, data, 'base64', (err) => {
		alert(err);
	})
}

export default {
	calculateAspectRatioFit,
	saveDialog,
	saveImage
}