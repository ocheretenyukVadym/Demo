import React from 'react';
import './User.css';
const User = ({user}) => {
    return(
        <div className="user-container">
            <p>{user.name}</p>
            <button className="user-btn">X</button>
        </div>
    )
}

export default User;