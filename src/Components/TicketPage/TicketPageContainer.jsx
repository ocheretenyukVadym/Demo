import { inject, observer } from 'mobx-react';
import React from 'react';
import NewTicketPage from './NewTicketPage/NewTicketPage';
import './TicketPageContainer.scss';

class TicketPage extends React.Component{
    render(){
        console.log(this.props.users);
        return(
            <div>
                <NewTicketPage 
                    newTicketValue={this.props.newTicketValue} 
                    setTicketValue={this.props.setTicketValue} 
                />
            </div>
        )
    }
}

const TicketPageContainer = inject(stores => ({
    tickets: stores.tickets,
    newTicketValue: stores.newTicketValue,
    setTicketValue: stores.setTicketValue
}))(TicketPage)

export default observer(TicketPageContainer);