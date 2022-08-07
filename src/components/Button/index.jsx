import { ButtonStyle } from './styles'

export function Button({
  title,
  path,
  backgroundColor,
  hoverBackgroundColor,
  textColor,
}) {
  return (
    <ButtonStyle
      href={path}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      textColor={textColor}
    >
      {title}
    </ButtonStyle>
  )
}
