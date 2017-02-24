import React from 'react';
import {Layer, Stage} from 'react-konva';
import CanvasImage from './image';

class CanvasComponent extends React.Component {
	render(){
		return (
			<Stage width={700} height={700}>
				<Layer>
					<CanvasImage image={this.props.bgImage} />
				</Layer>
			</Stage>
		)
	}
}

export default CanvasComponent;