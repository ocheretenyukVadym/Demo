import React from 'react';
import TicketsByUser from './TicketsByUser';

const AllTicketsByUser = ({tickets, userId}) => {
    return(
        <div>
            {tickets.map(ticket => 
                <TicketsByUser key={ticket.id} ticket={ticket} userId={userId}/>)}
        </div>
    )
}

export default AllTicketsByUser;