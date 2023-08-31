import { HeaderMenu, HeaderWrapper } from './HeaderStyles.ts'
import Container from '../Container'
import NavBar from '../../components/NavBar'
import SocialLinks from '../../components/SocialLinks'
import { useEffect, useState } from 'react'

const Header = () => {
    const [activeScroll, setActiveScroll] = useState(false)

    const changeBgOnScroll = () =>
        window.scrollY > 66 ? setActiveScroll(true) : setActiveScroll(false)

    useEffect(() => {
        window.addEventListener('scroll', changeBgOnScroll, true)
        return () => window.removeEventListener('scroll', changeBgOnScroll)
    }, [])

    return (
        <HeaderWrapper className={activeScroll ? 'bgColor' : ''}>
            <Container>
                <HeaderMenu>
                    <NavBar />
                    <SocialLinks iconSize="2.2rem" />
                </HeaderMenu>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
