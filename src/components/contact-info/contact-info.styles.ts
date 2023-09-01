import styled from 'styled-components'

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;

    @media ${props => props.theme.media.medium} {
        flex-direction: row;
    }

    @media ${props => props.theme.media.small} {
        flex-direction: column;
    }
`

export const S = {
    ContactInfo,
}
