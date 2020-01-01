import React from 'react';
import './contact.scss';

class Contact extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="contact-content">
                <h3>Location + Contact</h3>
                <div className="flex-container">
                    <div className="contact-info-left">
                        <p><b>PHONE: </b><a href={'tel:' + this.props.phone}>{this.props.phone}</a></p>
                        <p><b>EMAIL: </b><a href={'mailto:' + this.props.email}>{this.props.email}</a></p>
                        <p><b>ADDRESS: </b>{this.props.address}</p>
                        <p>The studio is open every weekday from 4:45 to 8:00 PM. Come by to ask questions, enroll, or watch a class session!</p>
                        <p>Like us on Facebook!</p>
                        <iframe
                            className="facebook-window"
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fleejontkd&tabs=timeline&width=400&height=250&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                            title="Leejon Facebook page"
                            width="500"
                            height="300"
                            scrolling="no"
                            frameBorder="0"
                            allow="encrypted-media"
                        />
                    </div>
                    <iframe
                        className="map-window"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.4992473723873!2d-121.8037129846977!3d37.23586067986116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e319eb4ac35b3%3A0x3f247c43f51df89b!2sLee+Jon+Taekwondo!5e0!3m2!1sen!2sus!4v1547867069012"
                        title="Leejon studio location"
                        height="450"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
		);
	}
}

export default Contact;