import React, { Component } from 'react';
import './Users.css';
import config from '../../../config/config';
import AuthService from '../../../services/AuthService';

import Navbar from '../../navbar/Navbar';

class Users extends Component {
	constructor(){
		super();
		this.Auth = new AuthService(config.apiLocation);

		this.state = {
			error: null,
			usersIsLoading: true,
			users: []
		};
	}

	componentDidMount() {
		this.fetchUsers();
	}

	render() {
		return (
			<div>
				<Navbar currentUser={localStorage.getItem('name')}/>
				<h1>Teams:</h1>
				{!this.state.usersIsLoading ? (
					this.state.users.map(user => {
						return (
							<p>{user.name}</p>
						);
					})
				) : (
					<h3>Loading...</h3>
				)
				}
			</div>
		);
	}
    
	fetchUsers() {
		this.Auth.fetch('http://localhost/api/users').then(data =>
			this.setState({
				users: data,
				usersIsLoading: false,
			})
		).catch(error => 
			this.setState({ 
				error, 
				usersIsLoading: false 
			})
		);
	}
}

export default Users;