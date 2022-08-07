import { ButtonsContainer, HeaderContainer, NavContainer } from './styles'

import codifyLogoImg from '../../../../assets/codify-logo.svg'
import { NavItem } from '../NavLink'
import { Button } from '../../../../components/Button'

export function Header() {
  const NavLink = [
    { title: 'Home', path: '/home' },
    { title: 'Sobre', path: '/sobre' },
    { title: 'Contato', path: '/contato' },
  ]

  const Buttons = [
    {
      title: 'Entrar',
      path: '/login',
      backgroundColor: 'transparent',
      hoverBackgroundColor: 'gray-800',
      textColor: 'black',
    },
    {
      title: 'Cadastrar',
      path: '/register',
      backgroundColor: 'blue-500',
      hoverBackgroundColor: 'blue-300',
      textColor: 'white',
    },
  ]

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

        <ButtonsContainer>
          {Buttons.map(
            ({
              title,
              path,
              backgroundColor,
              hoverBackgroundColor,
              textColor,
            }) => (
              <Button
                key={path}
                title={title}
                path={path}
                backgroundColor={backgroundColor}
                hoverBackgroundColor={hoverBackgroundColor}
                textColor={textColor}
              />
            ),
          )}
        </ButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
