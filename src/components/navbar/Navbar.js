import React from 'react';
import './Navbar.css';

function Navbar(props) {
	return (
		<div className="Navbar">
			<navbar className="Navbar">
				Telepath |
				<a href="/">Home</a>
				<a href="/teams">Teams</a>
				<a href="/users">Users</a>
				<span style={{float: 'right'}}>{props.currentUser}</span>
			</navbar>
		</div>
	);
}

export default Navbar;
