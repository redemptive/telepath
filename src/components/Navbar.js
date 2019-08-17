import React from 'react';

function Navbar(props) {
	return (
		<div className="Navbar">
			<navbar className="Navbar">
				Telepath
				<span style={{float: 'right'}}>{props.currentUser}</span>
			</navbar>
		</div>
	);
}

export default Navbar;
