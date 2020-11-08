import React from 'react';
import Ticket from './Ticket/Ticket';
import './Tickets.scss';

const Tickets = (props) => {
    return(
        <div className="container">
            {
                props.tickets.map( ticket => {
                    return(
                        <Ticket key = {ticket.id}
                        ticket = {ticket} {...props}
                        />
                    )
                    })
            }
        </div>
    )
}

export default Tickets;