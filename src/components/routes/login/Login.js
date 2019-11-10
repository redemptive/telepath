import React, { Component } from 'react';
import config from '../../../config/config';
import AuthService from '../../../services/AuthService';

class Login extends Component {
	constructor(){
		super();
		this.Auth = new AuthService(config.apiLocation);
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	render() {
		return (
			<div className="center">
				<div className="card">
					<h1>Login</h1>
					<a href="./register">Or register</a>
					<form>
						<input
							className="form-item"
							placeholder="email goes here..."
							name="email"
							type="text"
							onChange={this.handleChange}
						/>
						<input
							className="form-item"
							placeholder="Password goes here..."
							name="password"
							type="password"
							onChange={this.handleChange}
						/>
						<button
							className="form-submit"
							onClick={this.handleFormSubmit}
						>Log in</button>
					</form>
				</div>
			</div>
		);
	}

	componentWillMount(){
		if(this.Auth.loggedIn())
			this.props.history.replace('/');
	}
    
	handleFormSubmit(e){
		e.preventDefault();
		this.Auth.login(this.state.email,this.state.password)
			.then(res =>{
				this.props.history.replace('/');
			}).catch(err =>{
				alert(err);
			});
	}

	handleChange(e){
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		);
	}
}

export default Login;
