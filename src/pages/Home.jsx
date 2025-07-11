import React from 'react';
import ProjectCard from '../components/ProjectCard';


function Home() {
    const projects = [
        {
            title: "Oli's Art & Home Decor",
            description: "Oli's is my latest design. It is a fully customized eCommerce site for a fictional small decor business inspired by my sister. It feautures an eclectic, artsy style and celebrates uniquness and ethical manufacturing.",
            image: '/assets/Olis-img.png',
            alt: "Photo of Oli's Art & Home Decor Homepage",
            link: 'https://wcet.waketech.edu/kamucha/WEB260/wordpress/'
        },
        {
            title: 'Flora Fauna',
            description: "Flora Fauna is my first multi-page website. It is inspired by a fictional vegan café and plant nursery. the site reflects the brand's support of the local community and passion of ethics, sustainability and nature conservation",
            image: '/assets/FF-img.png',
            alt: 'photo of Flora Fauna Homepage',
            link: 'https://wcet.waketech.edu/kamucha/WEB125/FLORAFAUNA/index.html'
        },

        {
            title: 'Roots',
            description: "Roots is the first app and app idea that I developed. I used my skills in UX design to create a fashion app targeted towards all demographics to help them find their personal style and make shopping a more curated experiences",
            image: '/assets/Roots-img.png',
            alt: 'Photo of Roots Pages',
            link: 'https://www.figma.com/proto/AEKSGR4hcBBMYWg6YMxXWC/ROOTS?type=design&node-id=29-636&t=qKnZTLrINiYr4d4z-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=29%3A636&show-proto-sidebar=1'
        }
    ];

    return (
        <main className="home">
            <section className="about-me">
                <h2>About Me</h2>
                <img src='/assets/me.jpg'></img>

                <p>
                    Hello! My name is Kennedy and I am a 23 year old web designer originally from Seattle, WA. I found my love for web-design mostly by accident, but since then I have been dedicated to perfecting my craft.
                    I specialize in accesibile, responsive websites and with a layout and design that truly showcase a company's purpose and personality.
                </p>
            </section>

            <section className="projects">
                <h2>Projects</h2>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;
