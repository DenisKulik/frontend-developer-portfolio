import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const ImageWrapper = styled.div`
  flex-basis: 70%;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;

export const Title = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
`;

export const Description = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;