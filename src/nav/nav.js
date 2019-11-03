import React from 'react';
import './nav.scss';
import {Link, Router} from "react-router-dom";

class Nav extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<nav>
                <Router>
                    <ul>
                        <li><Link to="/home" activeClassName="active">home</Link></li>
                        <li><Link to="/schedule" activeClassName="active">calendar + schedule</Link></li>
                        <li><Link to="/contact" activeClassName="active">location + contact</Link></li>
                        <li><Link to="/info" activeClassName="active">student information</Link></li>
                        <li><Link to="/history" activeClassName="active">our history</Link></li>
                    </ul>
                </Router>
            </nav>
		);
	}
}

export default Nav;