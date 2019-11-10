import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/routes/login/Login';
import Register from './components/routes/register/Register';
import Teams from './components/routes/teams/Teams';
import Users from './components/routes/users/Users';

ReactDOM.render(    
	<Router>
		<div>
			<Route exact path='/' component={App} />

			<Route exact path='/login' component={Login} />
			<Route exact path='/register' component={Register} />
			
			<Route exact path='/teams' component={Teams} />
			<Route exact path='/users' component={Users} />
		</div>
	</Router>, 
	document.getElementById('root')
);

serviceWorker.unregister();