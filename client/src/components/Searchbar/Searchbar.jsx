import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonByName, getPokemons } from '../../redux/actions/actions'
import { Container, Input, Button } from '../StyledComponents/StyledSearchbar'
import { useNavigate } from 'react-router-dom'

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
    setName('')
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch(e)
  }

  const handleClick = () => {
    navigate('/pokemon')
    dispatch(getPokemons())
  }

  return (
    <Container>
      <Button type='button' onClick={handleClick}>
        Pokémons
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
