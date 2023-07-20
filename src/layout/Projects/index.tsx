import { useContext } from 'react';
import { Slide } from 'react-awesome-reveal';
import { ProjectsInner, ProjectsWrapper } from './ProjectsStyles.ts';
import Container from '../Container';
import Heading from '../../components/Heading';
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
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Heading>Projects</Heading>
                    <ProjectsInner>
                        {projectItems}
                    </ProjectsInner>
                </Slide>
            </Container>
        </ProjectsWrapper>
    );
};

export default Projects;