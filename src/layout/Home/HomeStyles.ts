import styled from 'styled-components';
import Particles from 'react-tsparticles';

export const HomeWrapper = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  overflow: hidden;
`;

export const CustomedParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const HomeInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media ${props => props.theme.media.medium} {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const AboutMe = styled.div`
  animation: moveInLeft 1s ease-out;
  z-index: 10;

  @media ${props => props.theme.media.medium} {
    text-align: center;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1;
  color: ${props => props.theme.colors.primaryLight};

  @media ${props => props.theme.media.small} {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};

  @media ${props => props.theme.media.small} {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;

export const PhotoWrapper = styled.div`
  width: 40rem;
  height: 40rem;
  z-index: 10;
  animation: moveInRight 1s ease-out;

  @media ${props => props.theme.media.large} {
    width: 35rem;
    height: 35rem;
  }

  @media ${props => props.theme.media.medium} {
    order: -1;
  }

  @media ${props => props.theme.media.small} {
    width: 30rem;
    height: 30rem;
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const MyPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 3rem 1rem ${props => props.theme.colors.primaryDark.replace(
          'rgb', 'rgba').replace(')', ', 0.5)')};
`;




