import { useCallback } from 'react';
import type {
    Container as ParticlesContainer, Engine
} from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import type { ISourceOptions } from 'tsparticles-engine';
import {
    AboutMe, CustomedParticles, Description, HomeInner,
    HomeWrapper, MyPhoto, PhotoWrapper, Subtitle, Title,
} from './HomeStyles.ts';
import photo from '../../assets/my-photo.jpg';
import Container from '../Container';

const particlesOptions: ISourceOptions = {
    fullScreen: false,
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
            },
        },
        color: {
            value: 'rgb(223, 157, 200)',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: {
                min: 0.1,
                max: 0.2,
            },
            animation: {
                enable: true,
                speed: 2,
                sync: false,
            },
        },
        size: {
            value: {
                min: 1,
                max: 9,
            },
            animation: {
                enable: true,
                speed: 10,
                sync: false,
            },
        },
        links: {
            enable: true,
            distance: 150,
            color: 'rgb(170, 54, 124)',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'slow',
                parallax: {
                    enable: true,
                    smooth: 10,
                    force: 50,
                },
            },
            onClick: {
                enable: true,
                mode: 'push',
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 0.8,
                },
            },
            push: {
                quantity: 4,
            },
        },
    },
    background: {
        color: 'rgb(18, 18, 18)',
    },
};

const Home = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: ParticlesContainer | undefined) => {
            await console.log(container);
        }, []);

    return (
        <HomeWrapper>
            <CustomedParticles
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOptions}
            />
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