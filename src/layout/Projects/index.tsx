import { ProjectsInner, ProjectsWrapper } from './ProjectsStyles.ts';
import Container from '../Container';
import Heading from '../../components/Heading';
import { useContext } from 'react';
import ProjectsContext from '../../context/ProjectsContext.ts';
import Project from '../../components/Project';

const Projects = () => {
    const projects = useContext(ProjectsContext);

    const projectItems = projects.map((project, idx) => (
        <Project
            key={idx}
            img={project.img}
            title={project.title}
            url={project.url}
            technologies={project.technologies}
        />
    ));

    return (
        <ProjectsWrapper>
            <Container>
                <Heading>Projects</Heading>
                <ProjectsInner>
                    {projectItems}
                </ProjectsInner>
            </Container>
        </ProjectsWrapper>
    );
};

export default Projects;