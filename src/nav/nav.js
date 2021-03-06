import React from 'react';
import './nav.scss';
import { BrowserRouter as Router } from "react-router-dom";

class Nav extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<nav>
                <ul>
                    <Router>
                        <li><a href="/">home</a></li>
                        <li><a href="/schedule">calendar + schedule</a></li>
                        <li><a href="/contact">location + contact</a></li>
                        <li><a href="/info">student information</a></li>
                        <li><a href="/gallery">gallery</a></li>
                        <li><a href="/history">our history</a></li>
                    </Router>
                </ul>
            </nav>
		);
	}
}

export default Nav;