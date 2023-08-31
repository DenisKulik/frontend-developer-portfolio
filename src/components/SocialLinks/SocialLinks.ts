import styled from 'styled-components'

export const SocialLinksWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const IconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        transition:
            fill 0.3s ease-in-out,
            transform 0.3s ease-in-out;
    }

    &:hover svg {
        fill: #fff;
        transform: scale(1.05);
    }
`
