
import React, { useState } from 'react';
import AllTicketsByUser from './TicketsByUser/AllTicketsByUser';
import './User.css';

const User = ({user, updateUser, isUserPage, moveToTrash, deleteUser, restore}) => {
    const [isViewChanges, setIsViewChanges] = useState(false);
    const [inputValue, setInputValue] = useState(user.name);
    const [isShowTickets, setIsShowTickets] = useState(false);

    const clickUpdateUser = () => setIsViewChanges(true);
    const handlerChange = e => setInputValue(e.target.value);
    const moveToRecycleBin = () => moveToTrash(user.id);
    const moveToDeletedUsers = () => deleteUser(user.id);
    const restoreFromTrash = () => restore(user.id);

    const isPresentTickets = () => user.tickets.length != 0;

    const showTicketslist = () => {isShowTickets? setIsShowTickets(false) : setIsShowTickets(true)}
    const saveUser = () => {
        let newUser = {...user};
        newUser.name = inputValue;
        updateUser(newUser);
        setIsViewChanges(false);
        setInputValue(user.name);
    }

    return (
        <div>
            {!isViewChanges ?
                <>
                <div className="user-container">
                    {isUserPage && isPresentTickets() && <span onClick={showTicketslist}>🎫</span>}
                        <p className="user-name" onClick={showTicketslist}>
                            {user.name}
                        </p>
                        
                        {isUserPage && <span className="delete-btn" onClick={clickUpdateUser}>🖊️</span>}
                        {isUserPage ?
                            <button className="delete-btn" onClick={moveToRecycleBin}>❌</button> :
                            <button className="delete-btn" onClick={moveToDeletedUsers}>❌</button>}
                </div>

                {isShowTickets && <AllTicketsByUser tickets={user.tickets} userId={user.id}/>}
                </>
            :
                <div className="user-container">
                    <input className="update-input" value={inputValue} onChange={e => handlerChange(e)}/>
                    <button className="save-btn" onClick={saveUser}>save</button>
                </div>}
        </div>

    )
}

export default User;