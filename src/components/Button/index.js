import styled from 'styled-components'

export const Button = styled.a`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[`${backgroundColor}`]};
  border: none;
  padding: 0.937rem 2rem;
  border-radius: 10px;
  color: ${({ theme, textColor }) => theme.colors[`${textColor}`]};
  transition: 0.3s;
  max-width: 160px;
  text-align: center;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme, hoverBackgroundColor }) =>
      theme.colors[`${hoverBackgroundColor}`]};
  }
`
