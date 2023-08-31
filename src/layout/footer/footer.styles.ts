import styled from 'styled-components'

const Footer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1rem 0;
`

const Copyright = styled.div`
    font-size: 1.8rem;
    color: ${props => props.theme.colors.primaryLight};
    text-transform: uppercase;
`

export const S = {
    Footer,
    Copyright,
}
