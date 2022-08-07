import styled from 'styled-components'

export const ButtonStyle = styled.a`
  background-color: ${({ theme, backgroundColor }) =>
    theme[`${backgroundColor}`]};
  border: none;
  padding: 0.937rem 2rem;
  border-radius: 10px;
  color: ${({ theme, textColor }) => theme[`${textColor}`]};
  transition: 0.3s;
  max-width: 160px;
  text-align: center;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme, hoverBackgroundColor }) =>
      theme[`${hoverBackgroundColor}`]};
  }
`
