import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 2rem 0;
  z-index: 9999;

  &.bgColor {
    background: ${props =>
      props.theme.colors.background.replace('rgb', 'rgba').replace(')', ', 0.8)')};
  }
`

const HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3rem;

  @media ${props => props.theme.media.medium} {
    & > div {
      display: none;
    }
  }
`

export const S = {
  Header,
  HeaderMenu,
}
