import { inject, observer } from 'mobx-react';
import React from 'react';
import NewTicketPage from './NewTicketPage/NewTicketPage';
import './TicketPageContainer.scss';
import Tickets from './Tickets/Tickets';

class TicketPageContainer extends React.Component{
    constructor(){
        super();
        this.state = { isAddNewTicket: false}
    }

    componentDidMount(){
        this.props.store.getTickets();
    }

    render(){
        return(
            <div>
                {this.props.isAddNewTicket && <NewTicketPage 
                    createNewTicket={this.props.store.createNewTicket}
                />}
                <Tickets tickets = {this.props.store.tickets}
                    deleteTicket={this.props.store.deleteTicket} 
                    moveToTrash={this.props.store.moveToTrashTicket} 
                    isTicketPage={true} 
                    updateTicket={this.props.store.updateTicket}/>
            </div>
        )
    }
}

export default inject('store')(observer(TicketPageContainer));