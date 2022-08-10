import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './style'
import { Header } from '../../pages/LandingPage/components/Header'
import { Intro } from '../../pages/LandingPage/components/Intro'

export function LandingLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Intro />
      <Outlet />
    </LayoutContainer>
  )
}
