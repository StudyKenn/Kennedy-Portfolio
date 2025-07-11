import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>{' '}
                |{' '}
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </ul>
        </footer>
    );
}

export default Footer;
