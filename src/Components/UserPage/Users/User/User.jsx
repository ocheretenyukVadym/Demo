import React from 'react';
import './User.css';
const User = ({user}) => {
    return(
        <div className="user-container">
            <div>{user.name}</div>
            <div>X</div>
        </div>
    )
}

export default User;