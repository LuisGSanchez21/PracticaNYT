import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navRow">
            <ul>
                <li>
                    <Link to="./News">Home</Link>
                </li>
                <li>
                    <Link to="/World News">World News</Link>
                </li>
                <li>
                    <Link to="/Sport">Sport</Link>
                </li>
                <li>
                    <Link to="/Finance">Finance</Link>
                </li>
                <li>
                    <Link to="/Technology">Technology</Link>
                </li>
                <li>
                    <Link to="/Entertainment">Entertainment</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
