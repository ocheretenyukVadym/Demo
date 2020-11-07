import React from 'react';
import './Header.scss'
import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <div className="container">
            <nav className="navbar-light">
                <ul className="navbar-nav pages">
                    <li>
                        <Link className="nav-item" to='/userPage'>Users</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to='/ticketPage'>Tickets</Link>
                    </li>
                </ul>
                <ul className="navbar-nav recycle-bin">
                    <li>
                        <Link className="nav-item" to='/recycleBin'>
                            <img className ="header-ico" src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=recycle-bin" alt=""/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;