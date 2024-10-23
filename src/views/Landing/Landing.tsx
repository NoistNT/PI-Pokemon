import { useNavigate } from 'react-router-dom'

import {
  LandingButton,
  LandingButtonText,
  LandingDescription,
  LandingImage,
  LandingTitle,
  LandingWrapper
} from '@/components/StyledComponents/StyledLanding'

import logo from '@/assets/logo.webp'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <LandingWrapper>
      <LandingImage alt="img not found" src={logo} />
      <LandingTitle>Welcome to our Pokémon database!</LandingTitle>
      <LandingDescription>
        This app is designed to help you get detailed information about all your
        favorite Pokémons, their abilities, stats, types, and more. Start your
        Pokémon adventure today!
      </LandingDescription>
      <LandingButton type="button" onClick={() => navigate('/pokemon')}>
        <LandingButtonText> Catch&apos;em all</LandingButtonText>
      </LandingButton>
    </LandingWrapper>
  )
}
