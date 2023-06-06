import styled from 'styled-components';
import banner from '../../assets/banner-bg.png';

export const HomeWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  overflow: hidden;
  background: url(${banner}) center center no-repeat;
  background-size: cover;
`;

export const HomeInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media ${props => props.theme.media.medium} {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const AboutMe = styled.div`
  flex: 1 1 65%;
  animation: moveInLeft 1s ease-out;

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
  font-size: 1.6rem;
`;

export const PhotoWrapper = styled.div`
  flex: 1 1 35%;
  animation: moveInRight 1s ease-out;

  @media ${props => props.theme.media.medium} {
    max-width: 30rem;
    order: -1;
  }

  @media ${props => props.theme.media.small} {
    max-width: 25rem;
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
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 3rem 1rem ${props => props.theme.colors.primaryDark.replace(
          'rgb', 'rgba').replace(')', ', 0.5)')};
`;




