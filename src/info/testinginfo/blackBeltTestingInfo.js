import React from 'react';
import bbQualifications from "../docs/bbqualifications.gif";

class BlackBeltTestingInfo extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div class="black-belt-testing-info-content">

                <h3>Black Belt Testing Information</h3>

                <p>
                    Black belt testing is a way to measure a student’s true progress in the study of martial arts.
                    Even after receiving their first dan black belt, students are still encouraged to continue in their growth and advancement of the practice in the art.
                    At this level, students continue to develop confidence and an understanding of what can be accomplished through the martial arts.
                    Students also grow in their personal development as leaders and communicators, in addition to refining their skill and technique.
                    Testing for black belts typically involves a complete review of the curriculum, including leadership and instructional skills.
                    Testing should display what the student has learned over the course of their martial arts career, from the philosophical knowledge to physical technique.
                </p>
                <p>
                    The testing for black belts is to be administered once a year.
                    With Master Ortez and LeeJon staff present, these testing dates are set up by the school ahead of time.
                    Note: Upper dan dates between tests are dictated by Kukkiwon.
                </p>

                <a href={bbQualifications} title="black belt qualifications" class="button">Black Belt Qualifications</a>

            </div>
		);
	}
}

export default BlackBeltTestingInfo;