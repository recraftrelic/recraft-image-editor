// @flow
import React from 'react';
import Uploader from './Uploader';
import CanvasComponent from './Canvas';

class Editor extends React.Component {

	constructor(props) {
		super(props)
	}

	onImage = (file) => {
		console.log(file)
	}

	showCanvas = () => {
		return <CanvasComponent bgImage="http://konvajs.github.io/assets/yoda.jpg" />
	}

	showUploader = () => {
		return <Uploader className="uploader" activeClassName="active">
					<h1>Drop image here & start editing</h1>
				</Uploader>
	}

	render () {
		return (
			<div>
				{this.showCanvas()}
			</div>
		)
	}
}

export default Editor;