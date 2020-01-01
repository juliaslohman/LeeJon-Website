import React from 'react';
import './login.scss';
import {Redirect} from 'react-router-dom';

class Login extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			inputUsername: '',
			inputPassword: '',
			redirectToReferrer: false
		}

		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.login = this.login.bind(this);
	}

	updateUsername = (event) => {
		this.setState({inputUsername : event.target.value});
		console.log("user", this.state.inputUsername);
	}

	updatePassword = (event) => {
		this.setState({inputPassword : event.target.value});
		console.log("password", this.state.inputPassword);
	}

	login = () => {
		// LOGIN CREDENTIAL CONSTANTS
		let CORRECT_USERNAME = "leejonstudent";
		let CORRECT_PASSWORD = "leejongogogo";

		console.log(this.state.inputUsername);
		console.log(this.state.inputPassword);

		let correctCredentials =
			this.state.inputUsername === CORRECT_USERNAME && 
			this.state.inputPassword === CORRECT_PASSWORD;
		
		if (correctCredentials) {
			this.setState(() => ({redirectToReferrer: true}));
		} else {
			alert(`Login information incorrect. Please retry or email ${this.props.email} for updated credentials.`);
		}
	}

	render() {
		// let inputUsername = document.getElementById("username").value;
		// let inputPassword = document.getElementById("password").value;

		// redirect if credentials are correct
		// const { from } = this.props.location.state || { from: { pathname: '/info' } };
    	// const { redirectToReferrer } = this.state;
		// if (redirectToReferrer === true) {
		// 	return <Redirect to={from} />
		// }

		return (
            <div className="login">
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
					<a onClick={this.login} className="login-button button">Login</a>
				</form>
            </div>
		);
	}
}

export default Login;