import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-background']};
  padding: 0px 2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0px;
  }
`

export const NavContainer = styled.ul`
  display: flex;
  gap: 1rem;
`
