import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

class Contact extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="contact-content">
                <h3>Location + Contact</h3>
                <p><b>PHONE: </b><a href="tel:408-281-5934">408-281-5934</a></p>
                <p><b>EMAIL: </b><a href="mailto:master@leejon.com">master@leejon.com</a></p>
                <p><b>ADDRESS: </b>6135 Camino Verde Drive, San Jose, CA 95119</p>
                <p>The studio is open every weekday from 4:45 to 8:00 PM. Come by to ask questions, enroll, or watch a class session!</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.4992473723873!2d-121.8037129846977!3d37.23586067986116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e319eb4ac35b3%3A0x3f247c43f51df89b!2sLee+Jon+Taekwondo!5e0!3m2!1sen!2sus!4v1547867069012" width="750" height="450" frameborder="0" allowfullscreen></iframe>
                <br/>
                <p>Like us on Facebook!</p>
                <FacebookProvider appId="123456789">
                    <Page href="https://www.facebook.com/leejontkd" tabs="timeline"/>
                </FacebookProvider>
            </div>
		);
	}
}

export default Contact;