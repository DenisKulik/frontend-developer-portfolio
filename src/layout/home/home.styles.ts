import styled from 'styled-components'
import Particles from 'react-tsparticles'
import ReactTypingEffect from 'react-typing-effect'

import { moveInLeft } from 'styles/animation/move-in-left.ts'
import { moveInRight } from 'styles/animation/move-in-right.ts'

const Home = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  overflow: hidden;
`

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const HomeInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media ${props => props.theme.media.medium} {
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const AboutMe = styled.div`
  animation: ${moveInRight} 1s ease-out;
  z-index: 10;

  @media ${props => props.theme.media.medium} {
    text-align: center;
  }
`

const Title = styled.h1`
  font-size: 5rem;
  line-height: 1;
  color: ${props => props.theme.colors.primaryLight};

  @media ${props => props.theme.media.small} {
    font-size: 4rem;
  }
`

const Subtitle = styled(ReactTypingEffect)`
  font-size: 5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};

  @media ${props => props.theme.media.small} {
    font-size: 4rem;
  }
`

const Description = styled.p`
  font-size: 1.8rem;
`

const PhotoWrapper = styled.div`
  flex-shrink: 0;
  width: 40rem;
  height: 40rem;
  z-index: 10;
  animation: ${moveInLeft} 1s ease-out;

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
`

const MyPhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 0 3rem 1rem
    ${props => props.theme.colors.primaryDark.replace('rgb', 'rgba').replace(')', ', 0.5)')};
`

export const S = {
  Home,
  StyledParticles,
  HomeInner,
  AboutMe,
  Title,
  Subtitle,
  Description,
  PhotoWrapper,
  MyPhoto,
}
