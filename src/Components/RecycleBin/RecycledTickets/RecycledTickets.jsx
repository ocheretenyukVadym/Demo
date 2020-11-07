import React from 'react'
import Tickets from "../../TicketPage/Tickets/Tickets";

const RecycledTickets = () => {
    return(
        <div className="recycled-tickets">
            <Tickets tickets={[]}/>
        </div>
    )
}

export default RecycledTickets;