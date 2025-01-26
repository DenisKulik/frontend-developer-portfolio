import styled from 'styled-components'
import { Link } from 'react-scroll'

const Navbar = styled.nav`
  display: flex;
  gap: 2rem;
`

export const NavLink = styled(Link)`
  font-size: 2.2rem;
  text-decoration: none;
  color: ${props => props.theme.colors.primaryLight};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover,
  &.active {
    color: #fff;
    transform: scale(1.05);
  }
`

export const S = {
  Navbar,
  NavLink,
}
