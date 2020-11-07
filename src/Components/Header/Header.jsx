import React from 'react';
import './Header.scss'
import { Link, Route, Switch } from 'react-router-dom';
import UserPageContainer from '../UserPage/UserPageContainer';
import TicketPageContainer from '../TicketPage/TicketPageContainer';
import RecycleBin from '../RecycleBin/RecycleBinContainer'


const Header = (props) => {
    return(
        <div>
        <div className="container">
            <nav className="navbar-light">
                <ul className="navbar-nav pages">
                    <li>
                        <Link className="nav-item" to='../UserPage/UserPageContainer'>Users</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='../TicketPage/TicketPageContainer'>Tickets</Link>
                    </li>
                </ul>
                <ul className="navbar-nav recycle-bin">
                    <li>
                        <Link className="nav-item" to='../RecycleBin/RecycleBinContaine'>Recycle Bin</Link>
                    </li>
                </ul>
            </nav>
          </div>
          <Switch>
            <Route exact path='../UserPage/UserPageContainer'><UserPageContainer /></Route>
            <Route path='../TicketPage/TicketPageContainer'><TicketPageContainer /></Route>
            <Route path='../RecycleBin/RecycleBinContaine'><RecycleBin /></Route>
          </Switch>
        </div>
    )
}

export default Header;