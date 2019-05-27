import React, { Component } from 'react';

function User(props) {
    return (
        <div class="user">
            <h2>{props.data.name}</h2>
        </div>
    )
}

export default User;
