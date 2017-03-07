import React from 'react';

class Popup extends React.Component {
	render () {
		return (
			<div className="popupContainer">
				<div className="popup">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Popup;