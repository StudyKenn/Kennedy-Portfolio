import React from 'react';
import './ProjectCard.css'

function ProjectCard({ title, description, image, link }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <img src={image} alt={title} className="project-image" />
            <p>{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            )}
        </div>
    );
}

export default ProjectCard;
