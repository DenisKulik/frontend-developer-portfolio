import styled from 'styled-components'

const Skill = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

export const S = {
  Skill,
  Title,
}
