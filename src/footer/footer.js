import React from 'react';
import './footer.scss';
import cta from "./footerimages/cta.gif";
import usat from "./footerimages/usat.gif";
import aau from "./footerimages/aau.gif";
import wtf from "./footerimages/wtf.gif";

class Footer extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<footer>

                <div className="allfooterimages">
                    <img src={cta} alt="California Taekwondo Association" width="60" height="60"/>
                    <img src={usat} alt="USA Taekwondo" width="131" height="60"/>
                    <img src={aau} alt="USA Amateur Athletic Union" width="51" height="60"/>
                    <img src={wtf} alt="World Taekwondo Federation" width="131" height="60"/>
                </div>

                <div className="footercontact">
                    LeeJon Taekwondo
                    <br/>
                    {this.props.address}
                    <br/>
                    <a href={'tel:' + this.props.phone}>{this.props.phone}</a>
                    <br/>
                    <a href={'mailto:' + this.props.email}>{this.props.email}</a>
                </div>

                Site built by <a href="https://github.com/juliaslohman">Julia Lohman</a>

            </footer>
		);
	}
}

export default Footer;