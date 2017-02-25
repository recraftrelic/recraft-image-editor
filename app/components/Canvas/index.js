import React from 'react';
import {Layer, Stage} from 'react-konva';
import CanvasImage from './image';

class CanvasComponent extends React.Component {
	render(){
		const {width, height, bgImage, rotation} = this.props;
		return (
			<div className="canvas-container">
				<Stage width={width} height={height}>
					<Layer>
						<CanvasImage rotation={rotation} width={width} height={height} image={bgImage} />
					</Layer>
				</Stage>
			</div>
		)
	}
}

export default CanvasComponent;