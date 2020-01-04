import React from 'react';
import leejonLogoMeaning from "./docs/leejonlogomeaning.gif";
import koreanTerminology from "./docs/koreanterminology.pdf";

class Info extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="info-content">
                <h3>Student Information</h3>
                <a href="/studentCreed" className="button">Student Creed</a>
                <a href="/colorBeltTestingInfo" className="button">Testing Information for Color Belts</a>
                <a href="/blackBeltTestingInfo" className="button">Testing Information for Black Belts</a>
                <a href="/history" className="button">History of Taekwondo, Choi's, and LeeJon</a>
                <a href="/forms" className="button" id="forms">Forms Videos</a>
                <a href={koreanTerminology} className="button">Korean Terminology</a>
                <a href={leejonLogoMeaning} className="button">Meaning of the LeeJon Logo</a>
                <a href="/taekwondoSpirit" className="button">Taekwondo Spirit</a>
            </div>
		);
	}
}

export default Info;