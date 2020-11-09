import React from 'react';
import User from './User/User';
import './Users.scss';


const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => {
                    return (
                        <User key={user.id}
                              user={user} {...props}
                        />
                    )
                })
            }
        </div>
    )
}

export default Users;