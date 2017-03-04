import React from 'react';
import Icon from '../Icon';

class ActionBar extends React.Component {
	render () {
		return (
			<div id="ActionBar" className="btn-group">
				<button className="btn btn-default">
					<Icon name="undo" />
				</button>
				<button className="btn btn-default">
					<Icon name="repeat" />
				</button>
				<button className="btn btn-default">
					<Icon name="download" />
				</button>
				<button className="btn btn-default">
					<Icon name="share-alt" />
				</button>
			</div>
		)
	}
}

export default ActionBar;