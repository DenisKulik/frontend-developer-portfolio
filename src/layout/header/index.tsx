import { useEffect, useState } from 'react'

import { S } from 'layout/header/header.styles.ts'
import { Container } from 'components/container'
import { Navbar } from 'components/navbar'
import { SocialLinks } from 'components/social-links'

export const Header = () => {
    const [activeScroll, setActiveScroll] = useState(false)

    const changeBgOnScroll = () =>
        window.scrollY > 66 ? setActiveScroll(true) : setActiveScroll(false)

    useEffect(() => {
        window.addEventListener('scroll', changeBgOnScroll, true)
        return () => window.removeEventListener('scroll', changeBgOnScroll)
    }, [])

    return (
        <S.Header className={activeScroll ? 'bgColor' : ''}>
            <Container>
                <S.HeaderMenu>
                    <Navbar />
                    <SocialLinks iconSize="2.2rem" />
                </S.HeaderMenu>
            </Container>
        </S.Header>
    )
}
