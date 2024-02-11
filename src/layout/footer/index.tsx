import { S } from 'layout/footer/footer.styles.ts'
import { SocialLinks } from 'components/social-links'

export const Footer = () => {
    return (
        <S.Footer>
            <SocialLinks iconSize="4rem" />
            <S.Copyright>© 2024 all right reserved</S.Copyright>
        </S.Footer>
    )
}
