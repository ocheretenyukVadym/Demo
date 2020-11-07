import React from 'react';
import User from './User/User';
import './Users.scss';

const Users = (props) => {
    return(
        <div className="container">
            {props.users.map(user => <User key={user.id} user={user} {...props}/>)}
        </div>
    )
}

export default Users;