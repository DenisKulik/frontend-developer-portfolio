import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

import { S } from 'layout/home/home.styles.ts'
import photo from 'assets/my-photo.jpg'
import { Container } from 'components/container'
import { particlesOptions } from 'data'

export const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <S.Home id="home">
      <S.StyledParticles init={particlesInit} options={particlesOptions} />
      <Container>
        <S.HomeInner>
          <S.AboutMe>
            <S.Title>Hello, I'm Denis Kulik</S.Title>
            <S.Subtitle
              speed={150}
              typingDelay={1000}
              eraseDelay={5000}
              text={['Frontend developer']}
            />
            <S.Description>
              I have 1+ years of commercial experience in frontend development using TypeScript, Vue
              and Nuxt
            </S.Description>
          </S.AboutMe>
          <S.PhotoWrapper>
            <S.MyPhoto src={photo} alt="Denis-Kulik" />
          </S.PhotoWrapper>
        </S.HomeInner>
      </Container>
    </S.Home>
  )
}
