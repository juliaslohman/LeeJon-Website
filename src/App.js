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
		return (
			<div>
        		<Ribbon/>
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
								<Contact/>
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
				<Footer/>
			</div>
		);
	}
}

export default App;
