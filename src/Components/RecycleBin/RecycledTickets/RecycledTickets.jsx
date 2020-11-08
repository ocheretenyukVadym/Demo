import {inject, observer} from 'mobx-react';
import React from 'react'
import Tickets from "../../TicketPage/Tickets/Tickets";

class RecycledTickets extends React.Component {
    componentDidMount() {
        this.props.store.getDeletedTickets();
    }

    render() {
        return (
            <div className="recycled-tickets">
                <Tickets tickets={this.props.store.deletedTickets}
                         deleteTicket={this.props.store.deleteTicket}
                         moveToTrash={this.props.store.moveToTrashTicket}
                         isTicketPage={false}
                         restore={this.props.store.restoreTicketFromRecycleBin}
                         userNames={this.props.store.userNames}
                         updateTicket={this.props.store.updateTicket}/>
            </div>
        )
    }
}

export default inject('store')(observer(RecycledTickets));