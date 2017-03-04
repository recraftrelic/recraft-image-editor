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

class Editor extends React.Component {

	constructor(props) {
		super(props)
	}

	onImage = (files) => {
		this.props.updateCanvasImage(files[0].path);
	}

	showUploader = () => {
		return <Uploader onDrop={this.onImage} className="uploader" activeClassName="active">
					<h1>Drop image here & start editing</h1>
				</Uploader>
	}

	render () {
		const {image, width, height, rotation} = this.props.canvas;
		return (
			<div>
				<TitleBar remote={remote} title="This is a title" theme="light"/>
				{ image ? <CanvasComponent rotation={rotation} bgImage={image} width={width} height={height} /> : this.showUploader()}
				<ActionBar />
			</div>
		)
	}
}

export default connect((state) => ({
	canvas: state.canvas
}), (dispatch) => bindActionCreators({updateCanvasImage}, dispatch)
)(Editor);