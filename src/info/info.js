import React from 'react';
import leejonLogoMeaning from "./docs/leejonlogomeaning.gif";

class Info extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="info-content">
                <h3>Student Information</h3>
                <a href="/studentCreed" class="button">Student Creed</a>
                <a href="/colorBeltTestingInfo" class="button">Testing Information for Color Belts</a>
                <a href="/blackBeltTestingInfo" class="button">Testing Information for Black Belts</a>
                <a href="/history" class="button">History of Taekwondo, Choi's, and LeeJon</a>
                <a href="/forms" class="button" id="forms">Forms Videos</a>
                <a href="docs/terminology.html" class="button">Korean Terminology</a>
                <a href={leejonLogoMeaning} class="button">Meaning of the LeeJon Logo</a>
                <a href="docs/Taekwondospirit.html" class="button">Taekwondo Spirit</a>
            </div>
		);
	}
}

export default Info;