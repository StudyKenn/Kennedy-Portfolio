import React from 'react';

function Skills() {
    const skills = ['Front-end web development: HTML, CSS, JavaScript, ', 'Back-end web development: PHP, Python', 'WordPress development and customization', 'UI/UX design using Figma', 'Responsive Design'];

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
                <p>Flora Fauna – Multi Page Website | Wake Technical Community College | Jan 2024 – May 2024
                    <ul>
                        <li>Created an imaginary café/plant nursery including branding, business goals and products.</li>
                        <li>Developed a design brief highlighting business needs and website goals.</li>
                        <li>Crafted a multi-page website using HTML, CSS, and JavaScript</li>
                    </ul>
                </p>
                <p>
                    Roots – High Fidelity Mockup | Wake Technical Community College | Jan 2024 – May 2024
                    <ul>
                        <li>Used UX skills including user research and personas to create a highly curated fashion app targeting shoppers looking for a tailored experience.</li>
                        <li> Design a high-fidelity mockup using Figma.</li>
                        <li> Finalized design by utilizing user testing.</li>
                    </ul>


                </p>
            </section>
        </main>
    );
}

export default Skills;
