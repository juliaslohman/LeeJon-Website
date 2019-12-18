import React from 'react';
import './ribbon.scss'

class Ribbon extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className="ribbon">
                <a href="/">
                    <h1>LeeJon Taekwondo</h1>
				</a>
                <h2>traditional martial arts in san jose</h2>
			</div>
		);
	}
}

export default Ribbon;