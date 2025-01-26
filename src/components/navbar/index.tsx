import { S } from 'components/navbar/navbar.styles.ts'

const links = ['home', 'skills', 'projects', 'contact']

export const Navbar = () => {
  const navLinkItems = links.map((item, idx) => (
    <S.NavLink key={idx} activeClass="active" to={item} spy={true}>
      {item}
    </S.NavLink>
  ))

  return <S.Navbar>{navLinkItems}</S.Navbar>
}
