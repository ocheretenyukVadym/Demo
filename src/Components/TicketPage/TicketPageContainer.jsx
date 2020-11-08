import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import NewTicketPage from './NewTicketPage/NewTicketPage';
import './TicketPageContainer.scss';
import Tickets from './Tickets/Tickets';

const TicketPageContainer = (props) =>{
    useEffect(() => {
        props.store.getUsers();
    },[]);


        return(
            <div>
                {<NewTicketPage 
                    createNewTicket={props.store.createNewTicket}
                />}
                <Tickets tickets = {props.store.tickets}
                    deleteTicket={props.store.deleteTicket} 
                    moveToTrash={props.store.moveToTrashTicket} 
                    isTicketPage={true} 
                    updateTicket={props.store.updateTicket}/>
            </div>
        )
}

export default inject('store')(observer(TicketPageContainer));