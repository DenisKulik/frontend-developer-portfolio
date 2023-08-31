import styled from 'styled-components'

export const StyledButton = styled.button`
    display: block;
    margin: 0 auto;
    padding: 2rem 5rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primaryDark};
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5rem;
    border: none;
    background: #fff;
    transition: all 0.2s;

    &:hover {
        transform: translateY(-0.3rem);
        box-shadow: 0 1.5rem 1rem rgb(0 0 0 / 20%);
    }

    &:active,
    &:focus {
        outline: 0;
        transform: translateY(-0.1rem);
        box-shadow: 0 0.75rem 0.5rem rgb(0 0 0 / 20%);
    }
`
