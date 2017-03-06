import fs from 'fs';

const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {

    let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };

}

const saveImage = (filename, data) => {
	fs.writeFile(filename, data, 'base64', (err) => {
		alert(err);
	})
}

export default {
	calculateAspectRatioFit
}