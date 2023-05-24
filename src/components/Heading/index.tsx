import React from 'react';
import { StyledHeading } from './HeadingStyles.ts';

type HeadingPropsType = {
    children: React.ReactNode
}

const Heading: React.FC<HeadingPropsType> = ({ children }) => {
    return (
        <StyledHeading>{children}</StyledHeading>
    );
};

export default Heading;