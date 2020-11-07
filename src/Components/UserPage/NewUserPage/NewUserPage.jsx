import React from 'react';

const NewUserPage = ({username, setUsername}) => {

    return(
        <div>
            <input type="text" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)}/>
        </div>
    )
}

export default NewUserPage;