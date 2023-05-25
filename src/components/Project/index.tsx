import React from 'react';
import {
    ProjectWrapper, Image, ImageWrapper, Title, Description
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
                <a href={url} target="_blank">
                    <Image src={img} alt={title} />
                </a>
            </ImageWrapper>
            <Title>{title}</Title>
            <Description>{technologies}</Description>
        </ProjectWrapper>
    );
};

export default Project;