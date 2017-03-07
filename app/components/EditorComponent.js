// @flow
import React from 'react';
import Uploader from './Uploader';
import CanvasComponent from './Canvas';
import TitleBar from 'react-window-titlebar';
import ActionBar from './ActionBar';
import {bindActionCreators} from 'redux';
import {updateCanvasImage} from '../actions/canvas';
import {connect} from 'react-redux';
import {remote} from 'electron';
import Icon from './Icon';
import {saveImage, saveDialog} from '../utils';

class Editor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stage: null
		}
	}

	onImage = (files) => {
		this.props.updateCanvasImage(files[0].path);
		this.setState({
			filename: files[0].path // extract filename from image
		})
	}

	showUploader = () => {
		return <Uploader onDrop={this.onImage} className="uploader" activeClassName="active">
					<h1>Drop image here & start editing</h1>
				</Uploader>
	}

	onDowload = () => {
		const {stage, filename} = this.state;
		let newImage = stage.getStage().toDataURL().replace(/^data:image\/png;base64,/, ""); // get canvas dataurl data and strip data meta ( we don't need it to save file to disk )
		saveDialog(filename, (name) => saveImage(name, newImage));
	}

	render () {
		const {image, width, height, rotation} = this.props.canvas;
		return (
			<div>
				<TitleBar remote={remote} title="This is a title" theme="light"/>
				{ image ? <div>
					<CanvasComponent getStage={(stage) => this.setState({stage})} rotation={rotation} bgImage={image} width={width} height={height} />
					<ActionBar>
						<button className="btn btn-default">
							<Icon name="sliders" />
						</button>
						<button onClick={this.onDowload} className="btn btn-default">
							<Icon name="download" />
						</button>
					</ActionBar>
				</div> : this.showUploader()}
			</div>
		)
	}
}

export default connect((state) => ({
	canvas: state.canvas
}), (dispatch) => bindActionCreators({updateCanvasImage}, dispatch)
)(Editor);