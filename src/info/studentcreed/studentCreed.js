import React from 'react';
import studentCreedPDF from "./studentcreed.pdf";

class StudentCreed extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div class="student-creed-content">

                <h3>Student Creed</h3>

                <ol>
                    <li>I will show respect and courtesy to all fellow humans.</li>
                    <li>I will be loyal to my school and instructor.</li>
                    <li>I will always give 100% effort.</li>
                    <li>I will never use Taekwondo in a harmful manner.</li>
                    <li>I promise to never give up and always finish what I start.</li>
                </ol>

                <a href={studentCreedPDF} class="button">Student Creed Downloadable PDF</a>

            </div>
		);
	}
}

export default StudentCreed;