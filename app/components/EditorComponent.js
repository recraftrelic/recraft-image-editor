// @flow
import React from 'react';
import Uploader from './Uploader';
import CanvasComponent from './Canvas';
import {bindActionCreators} from 'redux';
import {updateCanvasImage} from '../actions/canvas';
import {connect} from 'react-redux';

class Editor extends React.Component {

	constructor(props) {
		super(props)
	}

	onImage = (files) => {
		this.props.updateCanvasImage(files[0].path);
	}

	showCanvas = (image) => {
		return <CanvasComponent bgImage={image} />
	}

	showUploader = () => {
		return <Uploader onDrop={this.onImage} className="uploader" activeClassName="active">
					<h1>Drop image here & start editing</h1>
				</Uploader>
	}

	render () {
		const {image} = this.props.canvas;
		return (
			<div>
				{ image ? this.showCanvas(image) : this.showUploader()}
			</div>
		)
	}
}

export default connect((state) => ({
	canvas: state.canvas
}), (dispatch) => bindActionCreators({updateCanvasImage}, dispatch)
)(Editor);