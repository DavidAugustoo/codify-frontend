import {
  HeaderContainer,
  NavDesktopContainer,
  NavMobileContainer,
  MobileButton,
} from './styles'

import codifyLogoImg from '../../../../assets/codify-logo.svg'
import { List } from 'phosphor-react'

import { NavDesktopItem } from '../../components/Header/components/NavDesktopItem'
import { NavMobileItem } from '../../components/Header/components/NavMobileItem'
import { ButtonsArea } from './components/ButtonsContainer'
import { useState } from 'react'

const NavDesktopLinks = [
  { title: 'Home', path: '/home' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Contato', path: '/contato' },
]

const NavMobileLinks = [
  { title: 'Home', path: '/home' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Contato', path: '/contato' },
  { title: 'Entrar', path: '/login' },
  { title: 'Cadastrar', path: '/register' },
]

export function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <HeaderContainer>
      <div className="container">
        <img src={codifyLogoImg} alt="" />

        <nav>
          <NavDesktopContainer>
            {NavDesktopLinks.map(({ title, path }) => (
              <NavDesktopItem key={path} title={title} path={path} />
            ))}
          </NavDesktopContainer>
        </nav>

        <MobileButton onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <List size={45} />
        </MobileButton>

        <ButtonsArea />
      </div>

      {isNavExpanded ? (
        <NavMobileContainer>
          {NavMobileLinks.map(({ title, path }) => (
            <NavMobileItem key={path} title={title} path={path} />
          ))}
        </NavMobileContainer>
      ) : (
        ''
      )}
    </HeaderContainer>
  )
}
