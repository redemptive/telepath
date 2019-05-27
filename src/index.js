import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login'
import Register from './components/Register'

ReactDOM.render(    
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </div>
    </Router>, 
document.getElementById('root'));

serviceWorker.unregister();