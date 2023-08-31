import styled from 'styled-components'
import { Link } from 'react-scroll'

export const NavBarWrapper = styled.nav`
    display: flex;
    gap: 2rem;
`

export const CustomedLink = styled(Link)`
    font-size: 2.2rem;
    text-decoration: none;
    color: ${props => props.theme.colors.primaryLight};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover,
    &.active {
        color: #fff;
        transform: scale(1.05);
    }
`
