import { HeaderMenu, HeaderWrapper } from './HeaderStyles.ts';
import Container from '../Container';
import NavBar from '../../components/NavBar';

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderMenu>
                    <NavBar />
                </HeaderMenu>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;