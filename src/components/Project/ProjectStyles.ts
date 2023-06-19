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
  padding-top: 57.75%;
  overflow: hidden;
  background: top center no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;

  &:hover a {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover div {
    backdrop-filter: blur(3px) brightness(80%);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
`

export const Link = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5rem 1.2rem;
  opacity: 0;
  font-size: 1.6rem;
  color: #1e1e1e;
  text-decoration: none;
  text-align: center;
  background-color: rgba(167, 167, 167, 0.5);
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