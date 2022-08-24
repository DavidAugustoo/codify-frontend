import { LandingPageContainer } from './styles'
import { Intro } from '../../pages/LandingPage/components/Intro'
import { BrandSection } from './Brands'

export function LandingPage() {
  return (
    <LandingPageContainer>
      <Intro />
      <BrandSection />
    </LandingPageContainer>
  )
}
