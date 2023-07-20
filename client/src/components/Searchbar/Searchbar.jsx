import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, Input, Button } from '../StyledComponents/StyledSearchbar'
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
      toast.error('Please enter a pokémon name')
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
      <Button type='button' onClick={handleNavigate}>
        Create Pokémon
      </Button>
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
      <Toaster
        toastOptions={{
          style: {
            background: '#961c1c',
            color: '#ffffff',
            textShadow: '0 1px 0 #000000',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 1)'
          }
        }}
      />
    </Container>
  )
}
