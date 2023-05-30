import styled from 'styled-components';

export const ContactWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
`

export const ContactInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 2rem;
`

export const InfoAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`