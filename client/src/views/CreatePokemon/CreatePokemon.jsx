import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, postPokemon } from '../../redux/actions/pokemonAsyncActions'
import { capitalize, resetPokemon } from '../../helpers/helpers'
import { validatePokemon } from '../../helpers/validatePokemon'
import { Message } from '../../components/StyledComponents/StyledMessage'
import Loader from '../../components/Loader/Loader'

export default function CreatePokemon() {
  const dispatch = useDispatch()
  const { types, success, isLoading } = useSelector(
    (state) => state.pokemonReducer
  )

  const [pokemon, setPokemon] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: '',
    type: []
  })

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  const handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    if (name === 'type') {
      if (pokemon.type.length < 2) {
        setPokemon({ ...pokemon, type: [...pokemon.type, value] })
      } else {
        alert('Max 2 types allowed')
      }
    } else {
      setPokemon({ ...pokemon, [name]: value })
    }
    setErrors(validatePokemon({ ...pokemon, [name]: value }))
    setIsButtonDisabled(Object.keys(errors).length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isButtonDisabled) {
      dispatch(postPokemon(pokemon))
      resetPokemon(setPokemon)
    }
  }

  const pokemonTypes = types.map((type) => (
    <option key={type.id} value={type.name}>
      {capitalize(type.name)}
    </option>
  ))

  if (isLoading) {
    return <Loader />
  }

  if (success) {
    return (
      <div>
        <Message>Pokémon created successfully!</Message>
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Pokemon</h1>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            value={pokemon.name.toLowerCase()}
            onChange={handleChange}
          />
          <br />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor='hp'>HP: </label>
          <input
            type='number'
            name='hp'
            value={pokemon.hp}
            onChange={handleChange}
          />
          <br />
          {errors.hp && <p>{errors.hp}</p>}
        </div>
        <div>
          <label htmlFor='attack'>Attack: </label>
          <input
            type='number'
            name='attack'
            value={pokemon.attack}
            onChange={handleChange}
          />
          <br />
          {errors.attack && <p>{errors.attack}</p>}
        </div>
        <div>
          <label htmlFor='defense'>Defense: </label>
          <input
            type='number'
            name='defense'
            value={pokemon.defense}
            onChange={handleChange}
          />
          <br />
          {errors.defense && <p>{errors.defense}</p>}
        </div>
        <div>
          <label htmlFor='speed'>Speed: </label>
          <input
            type='number'
            name='speed'
            value={pokemon.speed}
            onChange={handleChange}
          />
          <br />
          {errors.speed && <p>{errors.speed}</p>}
        </div>
        <div>
          <label htmlFor='height'>Height: </label>
          <input
            type='number'
            name='height'
            value={pokemon.height}
            onChange={handleChange}
          />
          <br />
          {errors.height && <p>{errors.height}</p>}
        </div>
        <div>
          <label htmlFor='weight'>Weight: </label>
          <input
            type='number'
            name='weight'
            value={pokemon.weight}
            onChange={handleChange}
          />
          <br />
          {errors.weight && <p>{errors.weight}</p>}
        </div>
        <div>
          <label>Image: </label>
          <input
            type='text'
            name='image'
            placeholder='URL Image'
            value={pokemon.image}
            onChange={handleChange}
          />
          <br />
          {errors.image && <p>{errors.image}</p>}
        </div>
        <div>
          <label htmlFor='types'>Type: </label>
          <select
            name='type'
            id='type'
            value={pokemon.type}
            onChange={handleChange}
          >
            {pokemonTypes}
          </select>
          <br />
          {errors.type && <p>{errors.type}</p>}
          {pokemon.type.map((type) => (
            <p key={type}>{capitalize(type)}</p>
          ))}
        </div>
        <button type='submit' disabled={isButtonDisabled}>
          Create Pokémon
        </button>
        <button type='button' onClick={() => resetPokemon(setPokemon)}>
          Clear form
        </button>
      </form>
    </div>
  )
}
