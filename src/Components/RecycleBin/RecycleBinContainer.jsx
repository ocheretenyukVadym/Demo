import React, { useEffect, useState } from 'react';
import RecycledUsers from "./RecycledUsers/RecycledUsers";
import RecycledTickets from "./RecycledTickets/RecycledTickets";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import './RecycleBinContainer.css'

const RecycleBinContainer = () => {
    const [selectedUsers, setSelectedUsers] = useState(true);
    const { url } = useRouteMatch();
    let history = useHistory();
    
    useEffect(() => {
        setSelectedUsers(true);
    },[])

    const clickOnUsers = () => {
        setSelectedUsers(true);
        history.push(`${url}/users`)
    }

    const clickOnTickets = () => {
        setSelectedUsers(false);
        history.push(`${url}/tickets`)
    }

    return (
        <div className="recycle-bin-container">
            <div className="top-switches">
                <div className="switch-block">
                    <div className="switch-toggle">

                        <input id='first-switch-for-persent' name="switch" type="radio" checked={selectedUsers}  />
                        <label for='first-switch-for-persent' onClick={clickOnUsers}>Users</label>

                        <input id="second-switch-for-persent"  name="switch" type="radio" />
                        <label for="second-switch-for-persent" onClick={clickOnTickets}>Tickets</label>
                    </div>
                </div>
            </div>
 
            <Route path={`${url}/users`}><RecycledUsers /></Route>
            <Route path={`${url}/tickets`}><RecycledTickets /></Route>
        </div>
    )
}

export default RecycleBinContainer;