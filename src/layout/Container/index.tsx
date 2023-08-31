import React from 'react'
import ContainerWrapper from './ContainerStyle.ts'

type ContainerPropsType = {
    children: React.ReactNode
}

const Container: React.FC<ContainerPropsType> = ({ children, ...otherProps }) => {
    return <ContainerWrapper {...otherProps}>{children}</ContainerWrapper>
}

export default Container
