import { inject, observer } from 'mobx-react';
import React from 'react';
import NewTicketPage from './NewTicketPage/NewTicketPage';
import './TicketPageContainer.scss';

class TicketPageContainer extends React.Component{
    constructor(){
        super();
        this.state = { isAddNewTicket: false}
    }

    componentDidMount(){
        this.props.store.getTickets();
    }

    render(){
        console.log(this.props.users);
        return(
            <div>
                {this.state.isAddNewTicket && <NewTicketPage 
                    newTicketValue={this.props.store.newTicketValue} 
                    setTicketValue={this.props.store.setTicketValue}
                    createNewTicket={this.props.store.createNewTicket} 
                />}
                
                
            </div>
        )
    }
}

export default inject('store')(observer(TicketPageContainer));