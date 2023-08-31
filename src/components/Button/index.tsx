import React from 'react'
import { StyledButton } from './ButtonStyles.ts'

type DefaultButtonType = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

type ButtonPropsType = DefaultButtonType & {
    children: React.ReactNode
    callback?: () => void
}

const Button: React.FC<ButtonPropsType> = ({ callback, children, ...restProps }) => {
    return (
        <StyledButton onClick={callback} {...restProps}>
            {children}
        </StyledButton>
    )
}

export default Button
