import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <div className='navbar'>
            <span className='nav-brand'>
                W-APP
            </span>
            <ul className='nav-links'>
                <Link to={'/'} className='nav-items'>
                    <li> Home </li>
                </Link>

                <Link to={'/about'} className='nav-items'>
                    <li> About </li>
                </Link>
                <Link to={'/login'} className='nav-items'>
                    <li> Login </li>
                </Link>
                <Link to={'/weather-report'} className='nav-items'>
                    <li> Weather-Report </li>
                </Link>
                <Link to={'/contact'} className='nav-items'>
                    <li> Contact </li>
                </Link>
                
            </ul>
        </div>
    );
}