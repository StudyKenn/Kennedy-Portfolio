import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ toggleDarkMode, darkMode }) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button onClick={toggleDarkMode}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className='heading'>
                <h1>Kennedy Amucha</h1>
                <p>Aspiring Full Stack Developer</p>
            </div>
        </header>
    );
}

export default Header;
