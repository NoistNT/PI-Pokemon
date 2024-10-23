import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  ButtonText,
  Container,
  Search
} from '@/components/StyledComponents/StyledSearchbar'
import { showToast } from '@/helpers/helpers'
import { setCurrentPage } from '@/redux/actions/pokemonActions'
import {
  getPokemonByName,
  getPokemons
} from '@/redux/actions/pokemonAsyncActions'
import { useAppDispatch } from '@/redux/hooks'

export default function Searchbar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSearch = (key: string) => {
    if (key !== 'Enter') return
    if (!name) {
      showToast('error', 'Please enter a name')

      return
    }
    dispatch(getPokemonByName(name))
    dispatch(setCurrentPage(1))
    navigate('/pokemon')
    setName('')
  }

  const handleClick = () => {
    dispatch(setCurrentPage(1))
    dispatch(getPokemons())
    navigate('/pokemon')
  }

  return (
    <Container>
      <Button type="button" onClick={() => navigate('/create')}>
        <ButtonText>Create Pokémon</ButtonText>
      </Button>
      <Button type="button" onClick={handleClick}>
        <ButtonText>All Pokémons</ButtonText>
      </Button>
      <Search
        placeholder="Search pokémon"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => handleSearch(e.key)}
      />
    </Container>
  )
}
