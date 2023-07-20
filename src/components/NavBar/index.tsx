import { CustomedLink, NavBarWrapper } from './NavBarStyles.ts';

const NavBar = () => {
    return (
        <NavBarWrapper>
            <CustomedLink activeClass="active" to="home" spy={true}>
                Home
            </CustomedLink>
            <CustomedLink activeClass="active" to="skills" spy={true}>
                Skills
            </CustomedLink>
            <CustomedLink activeClass="active" to="projects" spy={true}>
                Projects
            </CustomedLink>
            <CustomedLink activeClass="active" to="contact" spy={true}>
                Contact
            </CustomedLink>
        </NavBarWrapper>
    );
};

export default NavBar;