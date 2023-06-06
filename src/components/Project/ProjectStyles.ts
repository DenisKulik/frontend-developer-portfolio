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
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  &:hover img {
    filter: blur(3px) brightness(90%);
    transform: scale(1.1);
  }

  &:hover a {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
`;

export const Link = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5rem 1rem;
  opacity: 0;
  font-size: 1.6rem;
  color: #1e1e1e;
  text-decoration: none;
  text-align: center;
  background-color: rgba(174, 174, 174, 0.5);
  border-radius: 1rem;
  transform: translate(-50%, 20%);
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