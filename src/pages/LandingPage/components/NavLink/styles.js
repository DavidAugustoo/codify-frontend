import styled from 'styled-components'

export const NavLink = styled.a`
  border-bottom: 3px solid transparent;
  transition: 0.3s;
  color: ${({ theme }) => theme.black};
  font-weight: 500;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme['blue-500']};
    color: ${({ theme }) => theme['blue-500']};
  }
`
