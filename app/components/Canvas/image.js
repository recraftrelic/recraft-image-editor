import React from 'react';
import {Image} from 'react-konva';

class CanvasImage extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			image: null
		}
	}

	updateImage = (src) => {

		// if not src return 

		if(!src)
			return;

		// build a new image

		const image = new window.Image();
		image.src = src;
		image.onload = () => {
			this.setState({
				image // update state
			})
		}
	}
	
	componentDidMount () {
		this.updateImage(this.props.image);
	}

	componentWillReceiveProps (nextProps) {
		if(nextProps.image != this.props.image)
			this.updateImage(nextProps.image);
	}

	render () {
		const {image} = this.state;
		return (
			<Image image={image} />
		)
	}
}

export default CanvasImage;