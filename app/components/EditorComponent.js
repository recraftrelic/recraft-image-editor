// @flow
import React from 'react';
import Uploader from './Uploader';
import CanvasComponent from './Canvas';
import TitleBar from 'react-window-titlebar';
import ActionBar from './ActionBar';
import {bindActionCreators} from 'redux';
import {updateCanvasImage, updateTitle, changeBrightness, changeGreyscale, changeSepia} from '../actions/canvas';
import {connect} from 'react-redux';
import {remote} from 'electron';
import Icon from './Icon';
import {saveImage, saveDialog} from '../utils';
import Popup from './Popup';

class Editor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			stage: null,
			effectsPopup: false
		}
	}

	onImage = (files) => {
		this.props.updateCanvasImage(files[0].path);
		this.props.updateTitle(files[0].name);
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

	openEffectPopup = () => {
		this.setState((prevState) => ({
			effectsPopup: !prevState.effectsPopup
		}))
	}

	render () {
		const {image, width, height, rotation, title, brightness, greyscale, sepia} = this.props.canvas;
		const {effectsPopup} = this.state;

		let popupStyle = {
			top: 30
		}

		let sideButtons = [
			<button onClick={this.openEffectPopup} className="btn btn-default titleBarButton">
				<Icon name="sliders" />
			</button>
		];

		return (
			<div>
				<TitleBar remote={remote} title={title} theme="light" buttons={sideButtons}/>
				{ image ? <div>
					<CanvasComponent getStage={(stage) => this.setState({stage})} rotation={rotation} bgImage={image} width={width} height={height} />
					<ActionBar>
						<button onClick={this.onDowload} className="btn btn-default">
							<Icon name="download" />
						</button>
					</ActionBar>
				</div> : this.showUploader()}
				<Popup style={popupStyle} isOpen={effectsPopup}>
					<input type="range" value={brightness} onChange={(e) => changeBrightness(e.target.value)} />
					<input type="range" value={greyscale} onChange={(e) => changeGreyscale(e.target.value)} />
					<input type="range" value={sepia} onChange={(e) => changeSepia(e.target.value)} />
				</Popup>
			</div>
		)
	}
}

export default connect((state) => ({
	canvas: state.canvas
}), (dispatch) => bindActionCreators({updateCanvasImage, updateTitle, changeBrightness, changeGreyscale, changeSepia}, dispatch)
)(Editor);