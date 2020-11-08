import React, {useState} from 'react';
import './Ticket.scss';

const Ticket = ({ticket, updateTicket, isTicketPage, moveToTrash, deleteTicket}) => {
    
    const [isViewChanges, setIsViewChanges] = useState(false);
    const [inputValue, setInputValue] = useState(ticket.title);
    
    const clickUpdateTicket = () => setIsViewChanges(true);
    const handlerChange = e => setInputValue(e.target.value);
    const moveToRecycleBin = () => moveToTrash(ticket.id);
    const moveToDeletedTickets = () => deleteTicket(ticket.id);

    const saveTicket = () => {
        let newTicket = { ...ticket };
        newTicket.title = inputValue;
        updateTicket(newTicket);
        setIsViewChanges(false);
        setInputValue(ticket.title);
    }

    return (
        <div>
            {!isViewChanges ?
                <div className="ticket-container">
                        <p>{ticket.title}</p>
                        {isTicketPage &&
                            <img className='update-pen' onClick={clickUpdateTicket} src='https://cdn.iconscout.com/icon/free/png-512/pencil-60-119100.png' />
                        }
                        {isTicketPage ?
                            <button className="delete-btn" onClick={moveToRecycleBin}><img src="https://lh3.googleusercontent.com/proxy/OF10tCa-I2uSxpXBRaoL6-ByM0np0a3WtP0dvqujpqouhJCt3mkidH76eZ035yNPRAfSUgZcYmWApW0W7RIUMTwJ4wy3BzaJmr-095CHcHjrM1NPDnj3xZoyUSNQxRlyT9xf65RH"/></button> :
                            <button className="delete-btn" onClick={moveToDeletedTickets}><img src="https://lh3.googleusercontent.com/proxy/OF10tCa-I2uSxpXBRaoL6-ByM0np0a3WtP0dvqujpqouhJCt3mkidH76eZ035yNPRAfSUgZcYmWApW0W7RIUMTwJ4wy3BzaJmr-095CHcHjrM1NPDnj3xZoyUSNQxRlyT9xf65RH"/></button>}
                </div>

            :
                <div className="ticket-container">
                    <input className="update-input" value={inputValue} onChange={e => handlerChange(e)} />
                    <button className="save-btn" onClick={saveTicket}>save</button>
                </div>}
        </div>
    )
}

export default Ticket;