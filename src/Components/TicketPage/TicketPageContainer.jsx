import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import NewTicketPage from './NewTicketPage/NewTicketPage';
import './TicketPageContainer.scss';
import Tickets from './Tickets/Tickets';

const TicketPageContainer = (props) => {
    useEffect(() => {
        props.store.getUsers();
        props.store.getTickets();
    }, []);

     return props.store.users ? (
        <div>
            {<NewTicketPage
                createNewTicket={props.store.createNewTicket}
            />}
            <Tickets tickets={props.store.tickets}
                     deleteTicket={props.store.deleteTicket}
                     moveToTrash={props.store.moveToTrashTicket}
                     isTicketPage={true}
                     getUsername={props.store.getUsername}
                     updateTicket={props.store.updateTicket}/>

        </div>
    ) : (<div></div>)
}

export default inject('store')(observer(TicketPageContainer));