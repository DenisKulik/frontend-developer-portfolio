import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  width: 30%;
  text-align: center;

  @media ${props => props.theme.media.medium} {
    width: 48%;
  }

  @media ${props => props.theme.media.small} {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  text-align: center;
  padding: 9rem 1rem;
  background: top center no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;

  @media ${props => props.theme.media.medium} {
    padding: 12rem 1rem;
  }

  @media ${props => props.theme.media.small} {
    padding: 16rem 1rem;
  }

  &:hover a {
    opacity: 1;
  }
`;

export const Link = styled.a`
  opacity: 0;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  color: #1e1e1e;
  text-decoration: none;
  text-align: center;
  background-color: rgba(174, 174, 174, 0.5);
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: rgba(200, 200, 200, 0.9);
  }
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