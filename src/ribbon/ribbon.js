import React from 'react';
import './ribbon.scss'
import ribbonLogo from './fistcrestlogo.png';

class Ribbon extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className="ribbon">
				<img src={ribbonLogo} alt="LeeJon Crest Logo"/>
				<div className="ribbon-text">
					<a href="/">
						<h1>LeeJon Taekwondo</h1>
					</a>
					<h2>traditional martial arts in san jose</h2>
				</div>
				<div className="ribbon-contact-info">
					<p><b>PHONE: </b><a href={'tel:' + this.props.phone}>{this.props.phone}</a></p>
					<p><b>EMAIL: </b><a href={'mailto:' + this.props.email}>{this.props.email}</a></p>
					<p><b>ADDRESS: </b>{this.props.address}</p>
				</div>
			</div>
		);
	}
}

export default Ribbon;