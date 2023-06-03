import { HeaderMenu, HeaderWrapper } from './HeaderStyles.ts';
import Container from '../Container';
import NavBar from '../../components/NavBar';
import SocialLinks from '../../components/SocialLinks';

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderMenu>
                    <NavBar />
                    <SocialLinks iconSize="2.2rem" />
                </HeaderMenu>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;