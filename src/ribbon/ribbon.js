import React from 'react';
import './ribbon.scss'
import ribbonLogo from './fistcrestlogo.png';

class Ribbon extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			displayContactInfo: true
		}

		this.shouldRenderContactInfo = this.shouldRenderContactInfo.bind(this);
	}

	componentDidMount() {
		this.shouldRenderContactInfo();
		window.addEventListener("resize", this.shouldRenderContactInfo);
	}

	// only show contact info if viewport is wide enough
	shouldRenderContactInfo = () => {
		if (window.innerWidth < 1200) {
			this.setState({displayContactInfo: false});
		} else {
			this.setState({displayContactInfo: true});
		}
	}

	render() {
		let renderContactInfo = this.state.displayContactInfo
			? (
				<div className="ribbon-contact-info">
					<p><b>PHONE: </b><a href={'tel:' + this.props.phone}>{this.props.phone}</a></p>
					<p><b>EMAIL: </b><a href={'mailto:' + this.props.email}>{this.props.email}</a></p>
					<p><b>ADDRESS: </b>{this.props.address}</p>
				</div>
			)
			: null;

		return (
			<div className="ribbon">
				<img src={ribbonLogo} alt="LeeJon Crest Logo"/>
				<div className="ribbon-text">
					<a href="/">
						<h1>LeeJon Taekwondo</h1>
					</a>
					<h2>traditional martial arts in san jose</h2>
				</div>
				{renderContactInfo}
			</div>
		);
	}
}

export default Ribbon;