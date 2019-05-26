import React, {Component} from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
    <div className="App">
      <Navbar />
      <MainContent />
      <div className="App-header">
          <h2>Welcome</h2>
      </div>
      <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
      </p>
    </div>
    );
  }

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
 }
  
}

export default withAuth(App);