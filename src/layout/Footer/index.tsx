import { Copyright, FooterWrapper } from './FooterStyles.ts'
import SocialLinks from '../../components/SocialLinks'

const Footer = () => {
    return (
        <FooterWrapper>
            <SocialLinks iconSize="4rem" />
            <Copyright>© 2023 all right reserved</Copyright>
        </FooterWrapper>
    )
}

export default Footer
