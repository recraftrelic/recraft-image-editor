import React from 'react';

class ActionBar extends React.Component {
	render () {
		return (
			<div id="ActionBarContainer" className="btn-group">
				<div id="ActionBar">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default ActionBar;