import { inject, observer } from 'mobx-react';
import React from 'react';
import './TicketsByUser.css'

const TicketsByUser = ({ticket, store, userId}) => {

    const unassignAction = () => store.unassignFromUser(ticket.id);

    return(
        <div>
            <div className="ticket">
                        <p>{ticket.title}</p>
                        <button className="delete-btn" onClick={unassignAction}>🢂</button>
            </div>
        </div>
    )
}

export default  inject('store')(observer(TicketsByUser));