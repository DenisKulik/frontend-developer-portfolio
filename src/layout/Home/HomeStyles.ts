import styled from 'styled-components';
import banner from '../../assets/banner-bg.png'

export const HomeWrapper = styled.section`
  height: 100vh;
  padding: 26rem 0 10rem 0;
  position: relative;
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
  color: #c8c8f8;
`;

export const Subtitle = styled.span`
  font-size: 5rem;
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
  box-shadow: 0 0 3rem 1rem rgba(58, 33, 49, 0.5);
`;


