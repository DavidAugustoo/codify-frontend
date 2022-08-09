import { HeaderContainer, NavContainer } from './styles'

import codifyLogoImg from '../../../../assets/codify-logo.svg'

import { NavItem } from '../NavLink'
import { ButtonsArea } from './components/ButtonsContainer'

const NavLink = [
  { title: 'Home', path: '/home' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Contato', path: '/contato' },
]

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={codifyLogoImg} alt="" />

        <nav>
          <NavContainer>
            {NavLink.map(({ title, path }) => (
              <NavItem key={path} title={title} path={path} />
            ))}
          </NavContainer>
        </nav>

        <ButtonsArea />
      </div>
    </HeaderContainer>
  )
}
