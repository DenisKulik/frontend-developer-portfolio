import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const Link = styled.a`
  font-size: 2.2rem;
  text-decoration: none;
  color: ${props => props.theme.colors.primaryLight};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }
`