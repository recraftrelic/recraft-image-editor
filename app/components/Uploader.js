import React, {Component} from 'react';
import Dropzone from 'react-dropzone'

export default class Uploader extends Component {

	onDrop (files) {
		console.log(files);
		// this.props.onDrop(files);
	}

	render() {
		return(
			<div className="upload-container">
				<Dropzone className="Uploader" onDrop={this.onDrop.bind(this)}>
					{this.props.children}
				</Dropzone>
			</div>
		)
	}
}