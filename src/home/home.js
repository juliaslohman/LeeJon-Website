import React from 'react';
import './home.scss';
import bbClass2016 from "./homepageImages/bbclass2016-crop.jpg";
import learnImage from "./homepageImages/forms2015-2.JPG";
import ranksImage from "./homepageImages/profiles.JPG";

class HomePage extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className="homepage-content">

                <div className="content-block welcome">
                    <h3>Welcome to LeeJon Taekwondo!</h3>
                    <p>
                        LeeJon Taekwondo is a traditional taekwondo school located in the Santa Teresa Valley of San Jose, California, founded by Grand Master Leonard Ortez.
                        LeeJon is dedicated to the practice of taekwondo both as a traditional art form and as an ever-evolving sport.
                        LeeJon boasts World Taekwondo Federation certified instructors and dozens of black belts.
                        We offer classes for every age and experience level, with equal focus on technique, forms, sparring, and overall physical fitness.
                    </p>
                </div>

                <img src={bbClass2016} alt="Black belt testing 2016" className="content-block content-image" id="bb2016"/>

                <div className="content-block mission">
                    <h3>Our mission statement</h3>
                    <p>
                        Our commitment is to our students, those who are willing to explore and open new frontiers in the oldest of martial arts.
                        We are dedicated to supporting the growth of traditional Taekwondo, and not diluting it with commercialism and marketing schemes.
                        Our philosophy is simple: we teach from our hearts, not your pockets!
                    </p>
                </div>

                <div className="content-block learn">
                    <img src={learnImage} className="content-image homepage-bg-image learn-image"/>
                    <div className="overlay"/>
                    <div className="block-textwrap">
                        <h3>Learn traditional Korean martial arts</h3>
                        <p>
                            Train with World Taekwondo Federation certified instructors to learn an ancient martial art.
                            Our classes focus equally on sparring, forms, basic technique, and conditioning.
                        </p>
                    </div>
                </div>

                <div className="content-block instructors">
                    <div className="block-textwrap">
                        <h3>World-class instructors</h3>
                        <p>
                            All LeeJon Taekwondo instructors are WTF-certified, headed by founder Leonard Ortez, who is a 9th-degree black belt with 40 years of teaching experience.
                        </p>
                    </div>
                    {/*<img src="../photos/instructor-edited.jpg" alt="Children's class" className="content-image" id="instructorimage" height="400"/>*/}
                </div>

                <div className="content-block ranks">
                    <img src={ranksImage} className="content-image homepage-bg-image ranks-image"/>
                    <div className="overlay"/>
                    <div className="block-textwrap">
                        <h3>Rise through the ranks</h3>
                        <p>
                            Build your knowledge, demonstrate your skills, and earn your next belt.
                            Dozens of students have earned their black belt at LeeJon.
                        </p>
                    </div>
                </div>

                <div className="content-block classofferings">
                    <h3>Classes for all ages and skill levels</h3>
                    <p>
                        We offer separate classes for all age groups and belt ranks, from young children to adults.
                        See our <a href="/schedule">schedule and calendar page</a> for more details, 
                        or visit our <a href="/contact">contact page</a> if you'd like to ask any questions.
                    </p>
                </div>

            </div>
		);
	}
}

export default HomePage;