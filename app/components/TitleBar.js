import React from 'react';
import WindowControls from './WindowControls';

class TitleBar extends React.Component {
	render () {
		return (
			<div className="full-width window-title-bar">
				<div className="pull-left">
					<WindowControls />
				</div>
			</div>
		)
	}
}

export default TitleBar;