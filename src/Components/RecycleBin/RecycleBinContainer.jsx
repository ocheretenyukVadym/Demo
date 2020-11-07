import React from 'react'
import RecycledUsers from "./RecycledUsers/RecycledUsers";
import RecycledTickets from "./RecycledTickets/RecycledTickets";
import {Link, Route, useRouteMatch} from "react-router-dom";

const RecycleBinContainer = () => {
    const { url } = useRouteMatch();
    return(
        <div className="recycle-bin-container">
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/users`}>Users</Link>
                    </li>
                    <li>
                        <Link to={`${url}/tickets`}>Tickets</Link>
                    </li>
                </ul>
            </nav>
            <Route path={`${url}/users`}><RecycledUsers /></Route>
            <Route path={`${url}/tickets`}><RecycledTickets /></Route>
        </div>
    )
}

export default RecycleBinContainer;