import React from 'react';
import {Layer, Stage} from 'react-konva';
import CanvasImage from './image';

class CanvasComponent extends React.Component {
	render(){
		const {width, height, bgImage} = this.props;
		return (
			<div className="canvas-container">
				<Stage width={width} height={height}>
					<Layer>
						<CanvasImage image={bgImage} />
					</Layer>
				</Stage>
			</div>
		)
	}
}

export default CanvasComponent;