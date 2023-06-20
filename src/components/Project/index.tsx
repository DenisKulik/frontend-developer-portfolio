import { FC } from 'react';
import {
    ProjectWrapper, ProjectHeader, Title, Description, Link
} from './ProjectStyles.ts';

type ProjectPropsType = {
    img: string
    title: string;
    url: string;
    technologies: string
}

const Project: FC<ProjectPropsType> = (props) => {
    const { img, title, url, technologies } = props;
    const ProjectHeaderStyles = { backgroundImage: `url(${img})` };

    return (
        <ProjectWrapper>
            <ProjectHeader style={ProjectHeaderStyles}>
                <Link href={url} target="_blank">View</Link>
            </ProjectHeader>
            <Title>{title}</Title>
            <Description>{technologies}</Description>
        </ProjectWrapper>
    );
};

export default Project;