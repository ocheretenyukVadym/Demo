import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import NewTicketPage from './NewTicketPage/NewTicketPage';
import Tickets from './Tickets/Tickets';

const TicketPageContainer = (props) => {
    useEffect(() => {
        props.store.getUsers();
        props.store.getTickets();
        props.store.getUserNames();
        props.store.setUserPage(false);
    }, []);

     return props.store.users ? (
        <div className="container">
            <NewTicketPage
                createNewTicket={props.store.createNewTicket}
            />
            <Tickets tickets={props.store.tickets}
                     deleteTicket={props.store.deleteTicket}
                     moveToTrash={props.store.moveToTrashTicket}
                     isTicketPage={true}
                     userNames={props.store.userNames}
                     updateTicket={props.store.updateTicket}/>

        </div>
    ) : (<div></div>)
}

export default inject('store')(observer(TicketPageContainer));