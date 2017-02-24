import React from 'react';
import {Layer, Stage} from 'react-konva';

class CanvasComponent extends React.Component {
	render(){
		return (
			<Stage width={700} height={700}>
				<Layer>
				</Layer>
			</Stage>
		)
	}
}

export default CanvasComponent;