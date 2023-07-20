import { useCallback, useContext } from 'react';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import ParticlesOptionsContext from '../../context/ParticlesOptionsContext.ts';
import {
    AboutMe, CustomedParticles, Description, HomeInner,
    HomeWrapper, MyPhoto, PhotoWrapper, Subtitle, Title,
} from './HomeStyles.ts';
import photo from '../../assets/my-photo.jpg';
import Container from '../Container';

const Home = () => {
    const particlesOptions = useContext(ParticlesOptionsContext);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <HomeWrapper>
            <CustomedParticles
                init={particlesInit}
                options={particlesOptions}
            />
            <Container>
                <HomeInner>
                    <AboutMe>
                        <Title>Hello, I'm Denis Kulik</Title>
                        <Subtitle
                            speed={150}
                            typingDelay={1000}
                            eraseDelay={5000}
                            text={[ 'Frontend developer.' ]}
                        />
                        <Description>
                            I create SPA using React (JS/TS) and
                            Redux (Redux-toolkit)
                        </Description>
                    </AboutMe>
                    <PhotoWrapper options={{ max: 20, scale: 1 }}>
                        <MyPhoto src={photo} alt="Denis-Kulik" />
                    </PhotoWrapper>
                </HomeInner>
            </Container>
        </HomeWrapper>
    );
};

export default Home;