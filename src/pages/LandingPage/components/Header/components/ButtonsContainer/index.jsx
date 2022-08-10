import { ButtonsContainer } from './styles'

import { Button } from '../../../../../../components/Button'

const Buttons = [
  {
    title: 'Entrar',
    path: '/login',
    backgroundColor: 'base-transparent',
    hoverBackgroundColor: 'base-transparent',
    textColor: 'base-text',
  },
  {
    title: 'Cadastrar',
    path: '/register',
    backgroundColor: 'base-button',
    hoverBackgroundColor: 'base-button-hover',
    textColor: 'base-white',
  },
]

export function ButtonsArea() {
  return (
    <ButtonsContainer>
      {Buttons.map((button) => (
        <Button
          key={button.path}
          path={button.path}
          backgroundColor={button.backgroundColor}
          hoverBackgroundColor={button.hoverBackgroundColor}
          textColor={button.textColor}
        >
          {button.title}
        </Button>
      ))}
    </ButtonsContainer>
  )
}
