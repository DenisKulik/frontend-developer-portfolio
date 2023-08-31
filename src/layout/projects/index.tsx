import { Slide } from 'react-awesome-reveal'

import { S } from 'layout/projects/projects.styles.ts'
import { Container } from 'components/container'
import { Heading } from 'components/heading'
import { Project } from 'components/project'
import { projects } from 'data'

export const Projects = () => {
    const projectItems = projects.map((project, idx) => (
        <Project
            key={idx}
            img={project.img}
            title={project.title}
            url={project.url}
            technologies={project.technologies}
        />
    ))

    return (
        <S.Projects id="projects">
            <Container>
                <Slide direction="up" duration={1500} triggerOnce={true}>
                    <Heading>Projects</Heading>
                    <S.ProjectsInner>{projectItems}</S.ProjectsInner>
                </Slide>
            </Container>
        </S.Projects>
    )
}
