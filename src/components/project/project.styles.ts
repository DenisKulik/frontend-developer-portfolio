import styled from 'styled-components'

const Project = styled.div`
  width: 30%;
  text-align: center;

  @media ${props => props.theme.media.medium} {
    width: 48%;
  }

  @media ${props => props.theme.media.small} {
    width: 100%;
  }
`

const ProjectHeader = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  text-align: center;
  padding-top: 57.75%;
  overflow: hidden;
  background: top center no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: none;
    transition: all 0.2s ease-in-out;
  }

  &:hover a {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &::before {
      backdrop-filter: blur(3px) brightness(80%);
      -webkit-backdrop-filter: blur(3px) brightness(80%);
    }
  }
`

const Link = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5rem 1.2rem;
  opacity: 0;
  font-size: 1.8rem;
  color: #1e1e1e;
  text-decoration: none;
  text-align: center;
  z-index: 1;
  background-color: rgba(167, 167, 167, 0.5);
  border-radius: 1rem;
  transform: translate(-50%, 20%);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.primary};
    background-color: rgba(200, 200, 200, 0.9);
  }

  @media ${props => props.theme.media.small} {
    padding: 1rem 2rem;
  }
`

const Title = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
`

const Description = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
`

export const S = {
  Project,
  ProjectHeader,
  Link,
  Title,
  Description,
}
