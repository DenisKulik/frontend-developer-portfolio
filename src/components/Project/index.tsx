import React from 'react';
import {
    ProjectWrapper, Image, ImageWrapper, Title, Description, Link
} from './ProjectStyles.ts';

type ProjectPropsType = {
    img: string
    title: string;
    url: string;
    technologies: string
}

const Project: React.FC<ProjectPropsType> = (props) => {
    const { img, title, url, technologies } = props;

    return (
        <ProjectWrapper>
            <ImageWrapper>
                <Image src={img} alt={title} />
                <Link href={url} target="_blank">View</Link>
            </ImageWrapper>
            <Title>{title}</Title>
            <Description>{technologies}</Description>
        </ProjectWrapper>
    );
};

export default Project;