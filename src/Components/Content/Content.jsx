import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserPageContainer from "../UserPage/UserPageContainer";
import TicketPageContainer from "../TicketPage/TicketPageContainer";
import RecycleBin from "../RecycleBin/RecycleBinContainer";

const Content = (props) => {
    return(
        <div className="content">
            <div className="container">
                <Switch>
                    <Route exact path='/userPage'><UserPageContainer /></Route>
                    <Route path='/ticketPage'><TicketPageContainer /></Route>
                    <Route path='/recycleBin'><RecycleBin /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Content;