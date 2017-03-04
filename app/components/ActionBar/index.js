import React from 'react';
import Icon from '../Icon';

class ActionBar extends React.Component {
	render () {
		return (
			<div id="ActionBarContainer" className="btn-group">
				<div id="ActionBar">
					<button className="btn btn-default">
						<Icon name="undo" />
					</button>
					<button className="btn btn-default">
						<Icon name="repeat" />
					</button>
					<button className="btn btn-default">
						<Icon name="download" />
					</button>
				</div>
			</div>
		)
	}
}

export default ActionBar;