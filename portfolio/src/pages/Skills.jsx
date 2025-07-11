import React from 'react';

function Skills() {
    const skills = ['HTML & CSS', 'JavaScript (ES6+)', 'React.js', 'Git & GitHub', 'Responsive Design'];

    return (
        <main className="skills">
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section className="experience">
                <h2>Experience</h2>
                <p><strong>Class Projects:</strong> Built several small apps using React, JavaScript, and CSS.</p>
                <p><strong>Volunteer Work:</strong> Designed a landing page for a local nonprofit.</p>
                <p><strong>Internship:</strong> Assisted in building UI components during a summer internship.</p>
            </section>
        </main>
    );
}

export default Skills;
