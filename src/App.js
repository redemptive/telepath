import React, {Component} from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import User from './components/User'

import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();


class App extends Component {
  constructor() {
    super();

    this.state = {
      users: null
    }
  }

  render() {
    console.log(this);
    return (
    <div className="App">
      <Navbar />
      <MainContent />
      <div className="App-header">
          <h2>Welcome {this.props.user.id}</h2>
      </div>
      {this.state.users.map((value, index) => {
        return (<User id={index} data={value} />)
      })}
      <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
      </p>
    </div>
    );
  }
  
  componentWillMount() {
    let users = Auth.fetch('http://localhost/users');
    this.setState({
      users: users
    })
  }

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }
  
}

export default withAuth(App);