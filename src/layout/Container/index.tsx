import React from 'react';
import ContainerWrapper from './ContainerStyle.ts';

type ContainerPropsType = {
    children: React.ReactNode
}

const Container = ({ children, ...otherProps }: ContainerPropsType) => {
    return (
        <ContainerWrapper {...otherProps}>
            {children}
        </ContainerWrapper>
    );
};

export default Container;