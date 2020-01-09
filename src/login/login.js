import React from 'react';
import './login.scss';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			inputUsername: '',
			inputPassword: '',
			redirect: false
		}

		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.login = this.login.bind(this);
	}

	updateUsername = (event) => {
		this.setState({inputUsername : event.target.value});
	}

	updatePassword = (event) => {
		this.setState({inputPassword : event.target.value});
	}

	login = () => {
		// LOGIN CREDENTIAL CONSTANTS
		let CORRECT_USERNAME = "Leejontkd";
		let CORRECT_PASSWORD = "powerteam";

		let correctCredentials =
			this.state.inputUsername === CORRECT_USERNAME && 
			this.state.inputPassword === CORRECT_PASSWORD;
		
		if (correctCredentials) {
			// redirects to info page
			this.setState(() => ({redirect: true}));
			// sets login status for whole site
			this.props.authenticate();
		} else {
			alert(`Login information incorrect. Please retry or email ${this.props.email} for updated credentials.`);
		}
	}

	render() {

		// redirect if credentials are correct
		if (this.state.redirect === true) {
			return (
				<Redirect to="/info"/>
			);
		} else {
			return (
				<div className="login-content">
					<div className="login-wrapper">
						<h3>Login</h3>
						<p>
							Access to student information requires login.
							To request access, email <a href={'mailto:' + this.props.email}>{this.props.email}</a>.
						</p>
						<form>
							<div className="login-box-label">Username</div>
							<input
								autoFocus
								type="text"
								name="username"
								placeholder="username"
								className="login-box"
								id="username"
								onChange={this.updateUsername}
							/>
							<div className="login-box-label">Password</div>
							<input
								type="text"
								name="password"
								placeholder="password"
								className="login-box"
								id="password"
								onChange={this.updatePassword}
							/>
							<br/>
							<button type="submit" onClick={this.login} className="login-button button">Login</button>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default Login;