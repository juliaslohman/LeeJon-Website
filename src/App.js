import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import './universalStyle.scss';
import Ribbon from './ribbon/ribbon.js';
import Nav from './nav/nav.js';
import Footer from './footer/footer.js';
import HomePage from './home/home.js';
import History from './history/history.js';
import Contact from './contact/contact.js';
import Schedule from './schedule/schedule.js';
import Info from './info/info.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const ADDRESS = "6135 Camino Verde Drive, San Jose, CA 95119";
		const PHONE = "408-281-5934";
		const EMAIL = "master@leejon.com";

		return (
			<div>
        		<Ribbon  address={ADDRESS} phone={PHONE} email={EMAIL}/>
				<Nav/>
				<div className="content">
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
								<Info/>
							</Route>
							<Route exact path="/history">
								<History/>
							</Route>
						</Switch>
					</Router>
				</div>
				<Footer address={ADDRESS} phone={PHONE} email={EMAIL}/>
			</div>
		);
	}
}

export default App;
