import React from 'react';
import ImageButton from './imageButton.js';
import './info.scss';

// button images
import studentCreedImg from "./buttonImages/studentCreedThumbnail.jpg";
import formsImg from "./buttonImages/formsThumbnail.jpg";
import colorBeltTestingInfoImg from "./buttonImages/colorBeltTestingInfoThumbnail.jpg";
import blackBeltTestingInfoImg from "./buttonImages/blackBeltTestingInfoThumbnail.jpg";
import historyImg from "./buttonImages/historyThumbnail.jpg";
import koreanTerminologyImg from "./buttonImages/koreanTerminologyThumbnail.jpg";
import leejonLogoMeaningImg from "./buttonImages/leejonLogoMeaningThumbnail.jpg";
import taekwondoSpiritImg from "./buttonImages/taekwondoSpiritThumbnail.jpg";

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
                <div className="flex-container">
                    <ImageButton text="Student Creed" path="/studentCreed" image={studentCreedImg}/>
                    <ImageButton text="Forms Videos" path="/forms" image={formsImg}/>
                    <ImageButton text="Testing Information for Color Belts" path="/colorBeltTestingInfo" image={colorBeltTestingInfoImg}/>
                    <ImageButton text="Testing Information for Black Belts" path="/blackBeltTestingInfo" image={blackBeltTestingInfoImg}/>
                    <ImageButton text="History of Taekwondo, Choi's, and LeeJon" path="/history" image={historyImg}/>
                    <ImageButton text="Korean Terminology" path={koreanTerminology} image={koreanTerminologyImg}/>
                    <ImageButton text="Meaning of the LeeJon Logo" path={leejonLogoMeaning} image={leejonLogoMeaningImg}/>
                    <ImageButton text="Taekwondo Spirit" path="/taekwondoSpirit" image={taekwondoSpiritImg}/>
                    </div>
            </div>
		);
	}
}

export default Info;