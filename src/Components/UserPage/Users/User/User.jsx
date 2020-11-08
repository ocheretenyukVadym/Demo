import React, { useState } from 'react';
import './User.scss';

const User = ({ user, updateUser, isUserPage, moveToTrash, deleteUser }) => {
    const [isViewChanges, setIsViewChanges] = useState(false);
    const [inputValue, setInputValue] = useState(user.name);

    const clickUpdateUser = () => setIsViewChanges(true);
    const handlerChange = e => setInputValue(e.target.value);
    const moveToRecycleBin = () => moveToTrash(user.id);
    const moveToDeletedUsers = () => deleteUser(user.id);

    const saveUser = () => {
        let newUser = { ...user };
        newUser.name = inputValue;
        updateUser(newUser);
        setIsViewChanges(false);
        setInputValue(user.name);
    }

    return (
        <div>
            {!isViewChanges ?
                <div className="user-container">
                    <p>{user.name}</p>
                    <div className="user-menu">
                        {isUserPage && 
                            <img className='update-pen' onClick={clickUpdateUser} src='https://cdn.iconscout.com/icon/free/png-512/pencil-60-119100.png' />
                        }
                        {isUserPage ?
                            <button className="delete-btn" onClick={moveToRecycleBin}>X</button> :
                            <button className="delete-btn" onClick={moveToDeletedUsers}>X</button>}
                    </div>
                </div>

            :
                <div className="user-container">
                    <input className="update-input" value={inputValue} onChange={e => handlerChange(e)} />
                    <button className="save-btn" onClick={saveUser}>save</button>

                </div>}
        </div>

    )
}

export default User;