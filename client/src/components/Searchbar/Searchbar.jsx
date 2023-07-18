import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, Input, Button } from '../StyledComponents/StyledSearchbar'
import { setCurrentPage, setSort } from '../../redux/actions/pokemonActions'
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
      alert('Please enter a pokémon name')
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
    dispatch(setSort(''))
    navigate('/pokemon')
  }

  return (
    <Container>
      <Button type='button' onClick={handleClick}>
        All Pokémons
      </Button>
      <Input
        type='text'
        placeholder='Search pokémon'
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Container>
  )
}
