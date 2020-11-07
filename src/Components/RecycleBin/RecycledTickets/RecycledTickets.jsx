import React from 'react'
import Users from "../../UserPage/Users/Users";
import Tickets from "../../TicketPage/Tickets/Tickets";

class RecycledTickets extends React.Component{
    render(){
        return(
            <div className="recycled-tickets">
                <Tickets tickets={[]}/>
            </div>
        )
    }
}

export default RecycledTickets;