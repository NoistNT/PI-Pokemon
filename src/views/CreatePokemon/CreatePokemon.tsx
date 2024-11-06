import type { Pokemon } from '@/types/types'

import { useEffect, useState } from 'react'

import {
  Container,
  Form,
  FormContainer,
  Title
} from '@/components/StyledComponents/StyledForm'
import {
  emptyErrors,
  emptyPokemon,
  resetPokemonForm,
  showToast
} from '@/helpers/helpers'
import { validatePokemon } from '@/helpers/validatePokemon'
import { resetFilters } from '@/redux/actions/pokemon-actions'
import { getPokemons, postPokemon } from '@/redux/actions/pokemon-async-actions'
import { getTypes } from '@/redux/actions/type-actions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { FormFooter } from '@/views/CreatePokemon/form-footer'
import { FormSelect } from '@/views/CreatePokemon/form-select'
import { LabelWithInput } from '@/views/CreatePokemon/label-with-input'

export default function CreatePokemon() {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector(({ pokemons }) => pokemons)
  const { types } = useAppSelector(({ types }) => types)
  const [pokemon, setPokemon] = useState<Pokemon>(emptyPokemon)
  const [errors, setErrors] = useState(emptyErrors)

  useEffect(() => {
    if (!types.length) {
      dispatch(getTypes())
    }
    dispatch(getPokemons())
  }, [dispatch, types.length])

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === 'type') {
      if (pokemon.type.length < 2) {
        const type = types.find(({ name }) => name === value)

        if (type) {
          setPokemon({
            ...pokemon,
            type: [...pokemon.type, type]
          })
        }
      } else {
        showToast('error', 'You can only select two types at most')
      }
    } else if (name === 'name' || name === 'image') {
      setPokemon({ ...pokemon, [name]: value })
    } else {
      setPokemon({ ...pokemon, [name]: Number(value) })
    }

    setErrors(validatePokemon(name, value))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (pokemon.id == '' || 0) {
      pokemon.id = crypto.randomUUID()
    }
    if (pokemon.image == '') {
      pokemon.image =
        'https://res.cloudinary.com/dsg5ofk4e/image/upload/v1709047835/pokewiki/60f684ec58ea6ded58112eac2324bfa8.webp'
    }
    if (
      Object.values(pokemon).some(
        (value: string | number) => value === '' || value === 0
      ) ||
      pokemon.type.length === 0
    ) {
      showToast('error', 'All fields are required')
    } else {
      dispatch(postPokemon(pokemon))
      dispatch(resetFilters())
      resetPokemonForm(setPokemon)
    }
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Create Pokémon</Title>
        <Form>
          <LabelWithInput
            errors={errors.name}
            label="name"
            type="text"
            value={pokemon.name.toLowerCase()}
            onChange={handleChange}
          />
          <LabelWithInput
            errors={errors.hp}
            label="hp"
            type="number"
            value={pokemon.hp}
            onChange={handleChange}
          />
          <LabelWithInput
            errors={errors.attack}
            label="attack"
            type="number"
            value={pokemon.attack}
            onChange={handleChange}
          />
          <LabelWithInput
            errors={errors.defense}
            label="defense"
            type="number"
            value={pokemon.defense}
            onChange={handleChange}
          />
          <LabelWithInput
            errors={errors.speed}
            label="speed"
            type="number"
            value={pokemon.speed}
            onChange={handleChange}
          />
          <LabelWithInput
            errors={errors.height}
            label="height"
            type="number"
            value={pokemon.height}
            onChange={handleChange}
          />
          <LabelWithInput
            errors={errors.weight}
            label="weight"
            type="number"
            value={pokemon.weight}
            onChange={handleChange}
          />
          <LabelWithInput
            errors={errors.image}
            label="image"
            placeholder="https://example.com"
            type="text"
            value={pokemon.image}
            onChange={handleChange}
          />
          <FormSelect
            errors={errors.type}
            pokemonType={pokemon.type}
            setPokemon={setPokemon}
            types={types}
            onChange={handleChange}
          />
        </Form>
        <FormFooter
          isLoading={isLoading}
          setErrors={setErrors}
          setPokemon={setPokemon}
        />
      </FormContainer>
    </Container>
  )
}
