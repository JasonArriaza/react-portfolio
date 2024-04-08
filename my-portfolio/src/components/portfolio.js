import React from 'react';
import Project from './project';

const Portfolio = ({ projects }) => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map(project => (
                    <Project
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
