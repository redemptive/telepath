import React, { Component } from 'react';
import AuthService from '../services/AuthService';

import config from '../config/config';

class AdminPanel extends Component {
	constructor(){
		super();
		this.Auth = new AuthService();
		this.handleTeamSubmit = this.handleTeamSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		return (
			<div className="admin-panel">
				<h3>Admin control panel</h3>
				<p>Add a team:</p>
				<form>
					<input
						className="form-item"
						placeholder="name goes here..."
						name="teamName"
						type="text"
						onChange={this.handleChange}
					/>
					<button
						className="form-submit"
						onClick={this.handleTeamSubmit}
					>Add Team</button>
				</form>
			</div>
		);
	}

	handleTeamSubmit(e){
		e.preventDefault();
		let teamName = this.state.teamName;
		this.Auth.fetch('http://localhost/api/teams', {
			method: 'POST',
			body: JSON.stringify({name: teamName})
		}).then(data =>
			this.setState({
				users: data,
				usersIsLoading: false,
			})
		).catch(error => 
			alert(error)
		);
	}

	handleChange(e){
		this.setState(
			{
				[e.target.name]: e.target.value
			}
		);
	}
}

export default AdminPanel;
