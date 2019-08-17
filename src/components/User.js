import React, { Component } from 'react';

function User(props) {
	return (
		<div className="user">
			<h2>{props.name}</h2>
		</div>
	);
}

export default User;
