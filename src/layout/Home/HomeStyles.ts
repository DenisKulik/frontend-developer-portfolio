import styled from 'styled-components';
import banner from '../../assets/banner-bg.png';

export const HomeWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5rem 0;
  background: url(${banner}) center center no-repeat;
  background-size: cover;
`;

export const HomeInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

export const AboutMe = styled.div`
  flex: 1 1 65%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${props => props.theme.colors.primaryLight};
`;

export const Subtitle = styled.span`
  font-size: 5rem;
  color: ${props => props.theme.colors.secondary};
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;

export const PhotoWrapper = styled.div`
  flex: 1 1 35%;
`;

export const MyPhoto = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 3rem 1rem ${props => props.theme.colors.primaryDark.replace(
          'rgb', 'rgba').replace(')', ', 0.5)')};
`;


