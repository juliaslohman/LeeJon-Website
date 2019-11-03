import React from 'react';
import './home.scss';

class HomePage extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div class="content homepagecontent">

                <div class="contentblock welcome">
                    <h3>Welcome to LeeJon Taekwondo!</h3>
                    <p>
                        LeeJon Taekwondo is a traditional taekwondo school located in the Santa Teresa Valley of San Jose, California, founded by Grand Master Leonard Ortez.
                        LeeJon is dedicated to the practice of taekwondo both as a traditional art form and as an ever-evolving sport.
                        LeeJon boasts World Taekwondo Federation certified instructors and dozens of black belts.
                        We offer classes for every age and experience level, with equal focus on technique, forms, sparring, and overall physical fitness.
                    </p>
                </div>

                <img src="bbclass2016-crop.jpg" alt="Black belt testing 2016" class="contentblock contentimage" id="bb2016"/>

                <div class="contentblock mission">
                    <h3>Our mission statement</h3>
                    <p>
                        Our commitment is to our students, those who are willing to explore and open new frontiers in the oldest of martial arts.
                        We are dedicated to supporting the growth of traditional Taekwondo, and not diluting it with commercialism and marketing schemes.
                        Our philosophy is simple: we teach from our hearts, not your pockets!
                    </p>
                </div>

                <div class="contentblock learn">
                    <div class="block-textwrap">
                        <h3>Learn traditional Korean martial arts</h3>
                        <p>
                            Train with World Taekwondo Federation certified instructors to learn an ancient martial art.
                            Our classes focus equally on sparring, forms, basic technique, and conditioning.
                        </p>
                    </div>
                </div>

                <div class="contentblock instructors">
                    <div class="block-textwrap">
                        <h3>World-class instructors</h3>
                        <p>
                            All LeeJon Taekwondo instructors are WTF-certified, headed by founder Leonard Ortez, who is a 9th-degree black belt with 40 years of teaching experience.
                        </p>
                    </div>
                    {/*<img src="../photos/instructor-edited.jpg" alt="Children's class" class="contentimage" id="instructorimage" height="400"/>*/}
                </div>

                <div class="contentblock ranks">
                    <div class="block-textwrap">
                        <h3>Rise through the ranks</h3>
                        <p>
                            Build your knowledge, demonstrate your skills, and earn your next belt.
                            Dozens of students have earned their black belt at LeeJon.
                        </p>
                    </div>
                </div>

                <div class="contentblock classofferings">
                    <div class="block-textwrap">
                        <h3>Classes for all ages and skill levels</h3>
                        <p>
                            We offer separate classes for all age groups and belt ranks, for young children to adults.
                            See our <a href="../schedule/schedule.html">schedule and calendar page</a> for more details.
                        </p>
                    </div>
                </div>

            </div>
		);
	}
}

export default HomePage;