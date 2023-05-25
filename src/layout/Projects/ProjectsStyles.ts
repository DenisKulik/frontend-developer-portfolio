import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`

export const ProjectsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(38rem, 1fr));
  gap: 1rem;
`;