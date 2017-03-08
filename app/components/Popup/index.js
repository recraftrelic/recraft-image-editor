import React from 'react';

class Popup extends React.Component {
	render () {
		const {isOpen, style} = this.props;
		return (
			<div style={{ display: isOpen ? 'inline-block' : 'none', ...style }} className="popupContainer">
				<div className="popup">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Popup;