import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './universalStyle.scss';
import Ribbon from './ribbon/ribbon.js';
import Nav from './nav/nav.js';
import Footer from './footer/footer.js';
import HomePage from './home/home.js';
import History from './history/history.js';
import Contact from './contact/contact.js';
import Schedule from './schedule/schedule.js';
import Gallery from './gallery/gallery.js';
import Info from './info/info.js';
import StudentCreed from './info/studentCreed/studentCreed.js';
import BlackBeltTestingInfo from './info/testingInfo/blackBeltTestingInfo.js';
import ColorBeltTestingInfo from './info/testingInfo/colorBeltTestingInfo.js';
import Login from './login/login.js';
import Forms from './info/forms/forms.js';
import TaekwondoSpirit from './info/taekwondoSpirit.js';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: this.updateAuthentication()
		}

		this.restrictProtected = this.restrictProtected.bind(this);
		this.authenticate = this.authenticate.bind(this);
		this.updateAuthentication = this.updateAuthentication.bind(this);
	}

	// redirects if not logged in
	restrictProtected = (component) => {
		if (this.state.isAuthenticated === true) {
			return (component);
		} else {
			return (
				<Redirect to={{
					pathname: '/login'
				}}/>
			);
		}
	}

	// called by login when correct credentials entered
	authenticate = () => {
		this.setState({isAuthenticated: true});
		sessionStorage.setItem('isAuthenticated', 'true');
	}

	updateAuthentication = () => {
		// checks session storage for past login
		let hasBeenAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
		if (hasBeenAuthenticated) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		// CONTACT CONSTANTS
		const ADDRESS = "6135 Camino Verde Drive, San Jose, CA 95119";
		const PHONE = "408-281-5934";
		const EMAIL = "master@leejon.com";

		return (
			<div>
				<Ribbon  address={ADDRESS} phone={PHONE} email={EMAIL}/>
				<Nav/>
				<div className="content">
					<FadeIn>
						<Router>
							<Switch>
								<Route exact path="/">
									<HomePage/>
								</Route>
								<Route exact path="/schedule">
									<Schedule/>
								</Route>
								<Route exact path="/contact">
									<Contact address={ADDRESS} phone={PHONE} email={EMAIL}/>
								</Route>
								<Route exact path="/info">
									{this.restrictProtected(<Info/>)}
								</Route>
								<Route exact path="/gallery">
									<Gallery/>
								</Route>
								<Route exact path="/history">
									<History/>
								</Route>
								<Route exact path="/login">
									<Login email={EMAIL} authenticate={this.authenticate}/>
								</Route>
								<Route exact path="/studentCreed">
									{this.restrictProtected(<StudentCreed/>)}
								</Route>
								<Route exact path="/colorBeltTestingInfo">
									{this.restrictProtected(<ColorBeltTestingInfo/>)}
								</Route>
								<Route exact path="/blackBeltTestingInfo">
									{this.restrictProtected(<BlackBeltTestingInfo/>)}
								</Route>
								<Route exact path="/taekwondoSpirit">
									{this.restrictProtected(<TaekwondoSpirit/>)}
								</Route>
								<Route exact path="/forms">
									{this.restrictProtected(<Forms/>)}
								</Route>
							</Switch>
						</Router>
					</FadeIn>
				</div>
				<Footer address={ADDRESS} phone={PHONE} email={EMAIL}/>
			</div>
		);
	}
}

export default App;