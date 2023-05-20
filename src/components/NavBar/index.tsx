import { Link, NavBarWrapper } from './NavBarStyles.ts';

const NavBar = () => {
    return (
        <NavBarWrapper>
            <Link href="">Home</Link>
            <Link href="">Skills</Link>
            <Link href="">Projects</Link>
            <Link href="">Contact</Link>
        </NavBarWrapper>
    );
};

export default NavBar;