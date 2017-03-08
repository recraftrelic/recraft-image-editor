import React from 'react';

class Popup extends React.Component {
	render () {
		const {isOpen} = this.props;
		return (
			<div style={{ display: isOpen ? 'block' : 'none' }} className="popupContainer">
				<div className="popup">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Popup;