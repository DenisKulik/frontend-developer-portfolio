import { S } from 'layout/footer/footer.styles.ts'
import { SocialLinks } from 'components/social-links'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Footer>
      <SocialLinks iconSize="4rem" />
      <S.Copyright>© {currentYear} all right reserved</S.Copyright>
    </S.Footer>
  )
}
