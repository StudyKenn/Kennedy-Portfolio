import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <a href="https://github.com/StudyKenn" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>{' '}
                |{' '}
                <a href="https://www.linkedin.com/in/kennedy-amucha-1257ab294?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzOHOEvmbRieIM2tMAb96IA%3D%3D" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </ul>
        </footer>
    );
}

export default Footer;
