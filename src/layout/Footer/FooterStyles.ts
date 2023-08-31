import styled from 'styled-components'

export const FooterWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1rem 0;
`

export const Copyright = styled.div`
    font-size: 1.8rem;
    color: ${props => props.theme.colors.primaryLight};
    text-transform: uppercase;
`
