import styled from 'styled-components'

export const IntroContainer = styled.section`
  background-color: ${({ theme }) => theme.colors['base-background']};
`

export const IntroArea = styled.div`
  display: flex;
  padding: 6.25rem 2rem;
`

export const IntroDescripton = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`

export const IntroImageContainer = styled.div`
  flex: 1;

  > img {
    width: 35rem;
    position: absolute;
    right: 0;
  }
`
