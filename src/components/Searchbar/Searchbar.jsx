import { toast } from 'sonner'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Input,
  Button,
  ButtonText
} from '../StyledComponents/StyledSearchbar'
import { setCurrentPage } from '../../redux/actions/pokemonActions'
import {
  getPokemonByName,
  getPokemons
} from '../../redux/actions/pokemonAsyncActions'

export default function Searchbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const handleSearch = () => {
    if (!name) {
      toast.error('Please enter a pokémon name', {
        position: 'top-center'
      })

      return
    }
    dispatch(getPokemonByName(name))
    dispatch(setCurrentPage(1))
    navigate('/pokemon')
    setName('')
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch(e)
  }

  const handleClick = () => {
    dispatch(setCurrentPage(1))
    dispatch(getPokemons())
    navigate('/pokemon')
  }

  const handleNavigate = () => {
    navigate('/create')
  }

  return (
    <Container>
      <Button type="button" onClick={handleNavigate}>
        <ButtonText>Create Pokémon</ButtonText>
      </Button>
      <Button type="button" onClick={handleClick}>
        <ButtonText>All Pokémons</ButtonText>
      </Button>
      <Input
        placeholder="Search pokémon"
        type="text"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  )
}
