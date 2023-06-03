import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 2rem 0;
  z-index: 9999;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3rem;

  @media ${props => props.theme.media.medium} {
    & > div {
      display: none;
    }
  }
`