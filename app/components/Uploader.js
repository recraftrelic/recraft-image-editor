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
				<Dropzone className="Uploader" style={
					{
						width: '50%',
						height: '80%',
						overflow: 'auto',
						margin: 'auto',
						position: 'absolute',
						top: '0',
						left: '0',
						bottom: '0',
						right: '0',
						textAlign: 'center',
						border: '2px dashed #333'
					}
				}
				activeStyle={
					{
						border: '3px dashed #e74c3c'
					}
				} 
				onDrop={this.onDrop.bind(this)}>
					{this.props.children}
				</Dropzone>
			</div>
		)
	}
}