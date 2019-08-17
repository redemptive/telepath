import React, {Component} from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import User from './components/User';
import Team from './components/Team';
import AdminPanel from './components/AdminPanel';

import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();


class App extends Component {
	constructor() {
		super();

		this.state = {
			usersIsLoading: true,
			users: [],
			error: null,
			teamsIsLoading: true,
			teams: []
		};
	}

	componentDidMount() {
		this.fetchUsers();
		this.fetchTeams();
	}

	render() {
		const { users, usersIsLoading, error, teams, teamsIsLoading } = this.state;
		return (
			<React.Fragment>
				<div className="App">
					<Navbar currentUser={localStorage.getItem('name')}/>
					{`${localStorage.getItem('userClass')}` === 'admin' ? (
						<AdminPanel />
					) : null}
					<MainContent />
					<div className="App-header">
						<h2>Welcome {`${localStorage.getItem('name')}`}</h2>
					</div>
					{error ? <p>{error.message}</p> : null}
					<h2>Users:</h2>
					{!usersIsLoading ? (
						users.map(user => {
							return (
								<User name={user.name}/>
							);
						})
					) : (
						<h3>Loading...</h3>
					)
					}
					<h2>Teams:</h2>
					{!teamsIsLoading ? (
						teams !== [] ? (
							teams.map(user => {
								return (
									<Team name={user.name}/>
								);
							})
						) : (
							<p>No teams...</p>
						)
					) : (
						<h3>Loading...</h3>
					)}
					<p className="App-intro">
						<button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
					</p>
				</div>
			</React.Fragment>
		);
	}

	fetchUsers() {
		Auth.fetch('http://localhost/api/users').then(data =>
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

	fetchTeams() {
		Auth.fetch('http://localhost/api/teams').then(data =>
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

	handleLogout(){
		Auth.logout();
		this.props.history.replace('/login');
	}
  
}

export default withAuth(App);