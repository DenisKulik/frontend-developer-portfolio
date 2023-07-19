import {
    AboutMe, Description, HomeInner, HomeWrapper, MyPhoto,
    PhotoWrapper,
    Subtitle, Title,
} from './HomeStyles.ts';
import photo from '../../assets/my-photo.jpg';
import Container from '../Container';

const Home = () => {
    return (
        <HomeWrapper>
            <Container>
                <HomeInner>
                    <AboutMe>
                        <Title>Hello, I'm Denis Kulik</Title>
                        <Subtitle>Frontend developer</Subtitle>
                        <Description>
                            I create SPA using React (JS/TS) and
                            Redux (Redux-toolkit)
                        </Description>
                    </AboutMe>
                    <PhotoWrapper>
                        <MyPhoto src={photo} alt="Denis-Kulik" />
                    </PhotoWrapper>
                </HomeInner>
            </Container>
        </HomeWrapper>
    );
};

export default Home;