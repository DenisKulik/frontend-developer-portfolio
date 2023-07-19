import { useCallback } from 'react';
import type {
    Container as ParticlesContainer, Engine
} from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import {
    AboutMe, CustomedParticles, Description, HomeInner,
    HomeWrapper, MyPhoto, PhotoWrapper, Subtitle, Title,
} from './HomeStyles.ts';
import photo from '../../assets/my-photo.jpg';
import Container from '../Container';

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
                options={{
                    fullScreen: false,
                    particles: {
                        groups: {
                            z5000: {
                                number: {
                                    value: 70,
                                },
                                zIndex: {
                                    value: 50,
                                },
                            },
                            z7500: {
                                number: {
                                    value: 30,
                                },
                                zIndex: {
                                    value: 75,
                                },
                            },
                            z2500: {
                                number: {
                                    value: 50,
                                },
                                zIndex: {
                                    value: 25,
                                },
                            },
                            z1000: {
                                number: {
                                    value: 40,
                                },
                                zIndex: {
                                    value: 10,
                                },
                            },
                        },
                        number: {
                            value: 200,
                        },
                        color: {
                            value: '#fff',
                            animation: {
                                enable: false,
                                speed: 20,
                                sync: true,
                            },
                        },
                        shape: {
                            type: 'circle',
                        },
                        opacity: {
                            value: 0.8,
                        },
                        size: {
                            value: 3,
                        },
                        move: {
                            angle: {
                                value: 10,
                                offset: 0,
                            },
                            enable: true,
                            speed: 1,
                            direction: 'bottom',
                        },
                        zIndex: {
                            value: 5,
                            opacityRate: 0.5,
                        },
                    },
                    background: {
                        color: 'rgb(18, 18, 18)',
                    },
                    emitters: {
                        position: {
                            y: 55,
                            x: -5,
                        },
                        rate: {
                            delay: 7,
                            quantity: 1,
                        },
                        size: {
                            width: 0,
                            height: 0,
                        },
                    },
                }}
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