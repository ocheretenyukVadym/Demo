import React from 'react';
import './Ticket.scss';

const Ticket = ({ticket}) => {
    return(
        <div className="ticket-row">
            <p> {ticket.title}</p>
            <button className="ticket-btn"> X </button>
        </div>
    )
}

export default Ticket;