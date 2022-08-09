import { ButtonStyle } from './styles'

export function Button(props) {
  return (
    <ButtonStyle
      href={props.path}
      backgroundColor={props.backgroundColor}
      hoverBackgroundColor={props.hoverBackgroundColor}
      textColor={props.textColor}
    >
      {props.title}
    </ButtonStyle>
  )
}
