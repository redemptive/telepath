import React, { Component } from 'react';
import './Teams.css';
import config from '../../../config/config';
import AuthService from '../../../services/AuthService';

import Navbar from '../../navbar/Navbar';

class Teams extends Component {
	constructor(){
		super();
		this.Auth = new AuthService(config.apiLocation);

		this.state = {
			error: null,
			teamsIsLoading: true,
			teams: []
		};
	}

	componentDidMount() {
		this.fetchTeams();
	}

	render() {
		return (
			<div>
				<Navbar currentUser={localStorage.getItem('name')}/>
				<h1>Teams:</h1>
				{!this.state.teamsIsLoading ? (
					this.state.teams.map(team => {
						return (
							<p>{team.name}</p>
						);
					})
				) : (
					<h3>Loading...</h3>
				)
				}
			</div>
		);
	}
    
	fetchTeams() {
		this.Auth.fetch('http://localhost/api/teams').then(data =>
			this.setState({
				teams: data,
				teamsIsLoading: false,
			})
		).catch(error => 
			this.setState({ 
				error, 
				teamsIsLoading: false 
			})
		);
	}
}

export default Teams;