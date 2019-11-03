import React from 'react';
import './footer.scss';

class Footer extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<footer>

                <div className="allfooterimages">
                    <img src="./footerimages/cta.gif" alt="California Taekwondo Association" width="60" height="60"/>
                    <img src="./footerimages/usat.gif" alt="USA Taekwondo" width="131" height="60"/>
                    <img src="./footerimages/aau.gif" alt="USA Amateur Athletic Union" width="51" height="60"/>
                    <img src="./footerimages/wtf.gif" alt="World Taekwondo Federation" width="131" height="60"/>
                </div>

                <div className="footercontact">
                    LeeJon Taekwondo
                    <br/>
                    6135 Camino Verde Drive, San Jose, CA 95119
                    <br/>
                    <a href="tel:408-281-5934">408-281-5934</a>
                    <br/>
                    <a href="mailto:master@leejon.com">master@leejon.com</a>
                </div>

            </footer>
		);
	}
}

export default Footer;