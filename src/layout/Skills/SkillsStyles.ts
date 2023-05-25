import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const SkillsInner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;

  @media ${props => props.theme.media.medium} {
    gap: 2.5rem;
  }
`;