import React, {useEffect, useState} from 'react';
import './Ticket.scss';

const Ticket = ({ticket, updateTicket, isTicketPage, moveToTrash, deleteTicket, restore, getUsername, names }) => {

    const [isViewChanges, setIsViewChanges] = useState(false);
    const [inputValue, setInputValue] = useState(ticket.title);

    const clickUpdateTicket = () => setIsViewChanges(true);
    const handlerChange = e => setInputValue(e.target.value);
    const moveToRecycleBin = () => moveToTrash(ticket.id);
    const moveToDeletedTickets = () => deleteTicket(ticket.id);
    const restoreFromTrash = () => restore(ticket.id);

    const saveTicket = () => {
        let newTicket = {...ticket};
        newTicket.title = inputValue;
        updateTicket(newTicket);
        setIsViewChanges(false);
        setInputValue(ticket.title);
    }

    useEffect(() => {
        getUsername(ticket.id);
    });

    return (
        <div>
            {!isViewChanges ?
                <div className="ticket-container">

                    {isTicketPage ? "" :
                        <div className="restore-button" onClick={restoreFromTrash}>restore</div>
                    }

                    <p>{ticket.title}</p>

                    <div className="username">username:{names.get(ticket.id)}</div>

                    {isTicketPage &&
                    <img className='update-pen' onClick={clickUpdateTicket}
                         src='https://cdn.iconscout.com/icon/free/png-512/pencil-60-119100.png'/>
                    }
                    {isTicketPage ?
                        <button className="delete-btn" onClick={moveToRecycleBin}>X</button> :
                        <button className="delete-btn" onClick={moveToDeletedTickets}>X</button>}
                </div>
                :
                <div className="ticket-container">
                    <input className="update-input" value={inputValue} onChange={e => handlerChange(e)}/>
                    <button className="save-btn" onClick={saveTicket}>save</button>
                </div>}
        </div>
    )
}

export default Ticket;