import React, { useEffect, useState } from 'react';
import RecycledUsers from "./RecycledUsers/RecycledUsers";
import RecycledTickets from "./RecycledTickets/RecycledTickets";
import { Route, useHistory, useRouteMatch } from "react-router-dom";
import './RecycleBinContainer.css'
import {inject, observer} from "mobx-react";

const RecycleBinContainer = props => {
    const [selected, setSelected] = useState(true);
    const { url } = useRouteMatch();
    let history = useHistory();
    
    useEffect(() => {
        history.location.pathname === "/recycleBin/users"? setSelected(true) : setSelected(false);
        props.store.setUserPage(3);
    }, [])

    const clickOnUsers = () => {
        setSelected(true);
        history.push(`${url}/users`)
    }

    const clickOnTickets = () => {
        setSelected(false);
        history.push(`${url}/tickets`)
    }

    return (
        <div className="recycle-bin-container">
            <div className="top-switches">
                <div className="switch-block">
                    <div className="switch-toggle">

                        <input id='radio1' name="switch" type="radio" onChange={() => {}} checked={selected}  />
                        <label for='radio1t' onClick={clickOnUsers}>Users</label>

                        <input id="radio2"  name="switch" type="radio" checked={!selected}/>
                        <label for="radio2" onClick={clickOnTickets}>Tickets</label>
                    </div>
                </div>
            </div>
 
            <Route path={`${url}/users`}><RecycledUsers /></Route>
            <Route path={`${url}/tickets`}><RecycledTickets /></Route>
        </div>
    )
}

export default inject('store')(observer(RecycleBinContainer));