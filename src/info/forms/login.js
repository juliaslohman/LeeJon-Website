import React from 'react';

class Login extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
            <div className="login">
                <h3>Login</h3>
                <p>
					Access to student information requires login. 
					To request access, email <a href={'mailto:' + this.props.email}>{this.props.email}</a>
				</p>
            </div>
		);
	}
}

export default Login;