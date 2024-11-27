import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import {
  LandingButton,
  LandingButtonText,
  LandingDescription,
  LandingImage,
  LandingTitle,
  LandingWrapper
} from '@/components/StyledComponents/StyledLanding'
import { getPokemons } from '@/redux/actions/pokemon-async-actions'
import { useAppDispatch } from '@/redux/hooks'

import logo from '@/assets/logo.webp'

export default function Landing() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  })

  return (
    <LandingWrapper>
      <LandingImage alt="Pokemon logo" src={logo} />
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
