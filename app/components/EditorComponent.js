// @flow
import React from 'react';
import Uploader from './Uploader';
import CanvasComponent from './Canvas';

class Editor extends React.Component {

	constructor(props) {
		super(props)
	}

	onImage = (files) => {
		this.props.updateCanvasImage(files[0].path);
	}

	showCanvas = () => {
		return <CanvasComponent bgImage="http://konvajs.github.io/assets/yoda.jpg" />
	}

	showUploader = () => {
		return <Uploader onDrop={this.onImage} className="uploader" activeClassName="active">
					<h1>Drop image here & start editing</h1>
				</Uploader>
	}

	render () {
		return (
			<div>
				{this.showUploader()}
			</div>
		)
	}
}

export default Editor;