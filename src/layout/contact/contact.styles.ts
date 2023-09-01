import styled from 'styled-components'

const Contact = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    overflow: hidden;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
    );
`

const ContactInner = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 2rem;
`

export const S = {
    Contact,
    ContactInner,
}
