import React from 'react';

class WindowControls extends React.Component {
	render () {
		return (
			<ul className="window-controls list-inline">
				<li className="window-close"></li>
				<li className="window-minimise"></li>
				<li className="window-maximise"></li>
			</ul>
		)
	}
}

export default WindowControls;