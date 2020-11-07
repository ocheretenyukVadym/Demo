import React, { useState } from 'react';
import './User.css';
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
            {!isViewChanges &&
                <div className="user-container">
                    <div>{user.name}</div>
                    <div className="user-menu">
                        <div onClick={clickUpdateUser}>
                            {isUserPage && 'update'}
                        </div>
                        {isUserPage ?
                            <div onClick={moveToRecycleBin}>X</div> :
                            <div onClick={moveToDeletedUsers}>X</div>}
                    </div>
                </div>}

            {isViewChanges &&
                <div className="user-container">
                    <div>
                        <input value={inputValue} onChange={e => handlerChange(e)} />
                    </div>
                    <div onClick={saveUser}>save</div>

                </div>}
        </div>

    )
}

export default User;