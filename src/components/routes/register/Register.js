import React, { Component } from 'react';
//import './Login.css';
import config from '../../../config/config';
import AuthService from '../../../services/AuthService';

class Register extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.Auth = new AuthService(config.apiLocation);
	}
	render() {
		return (
			<div className="center">
				<div className="card">
					<h1>Register</h1>
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
						<input
							className="form-item"
							placeholder="name goes here..."
							name="name"
							type="name"
							onChange={this.handleChange}
						/>
						<button
							className="form-submit"
							onClick={this.handleFormSubmit}
						>Register</button>
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
		this.Auth.register(this.state.email, this.state.name, this.state.password)
			.then(res =>{
				this.props.history.replace('/login');
			}).catch(err =>{
				alert(err);
			})
	}

	handleChange(e){
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		)
	}
}

export default Register;
