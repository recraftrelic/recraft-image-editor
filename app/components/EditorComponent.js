// @flow
import React from 'react';
import Uploader from './Uploader';

class Editor extends React.Component {
	render () {
		return (
			<div>
				<Uploader>
					<h1>Drop image here & start editing</h1>
				</Uploader>
			</div>
		)
	}
}

export default Editor;