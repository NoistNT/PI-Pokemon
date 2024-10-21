import type { Pokemon } from '@/types/types'

import { useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner'

import {
  ButtonsContainer,
  ButtonText,
  Container,
  ErrorSpan,
  Form,
  FormContainer,
  FormItem,
  IconRemoveType,
  Input,
  Label,
  LabelInputContainer,
  PokemonTypesList,
  SelectBox,
  SubmitButton,
  Title,
  TypeList,
  TypeListContainer
} from '@/components/StyledComponents/StyledForm'
import { capitalize, resetPokemon } from '@/helpers/helpers'
import { validatePokemon } from '@/helpers/validatePokemon'
import { getTypes, postPokemon } from '@/redux/actions/pokemonAsyncActions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import icon_remove from '@/assets/icon_remove.svg'

export default function CreatePokemon() {
  const dispatch = useAppDispatch()
  const { types, isLoading } = useAppSelector(({ pokemons }) => pokemons)

  const [pokemon, setPokemon] = useState<Pokemon>({
    id: '',
    name: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: '',
    type: [],
    userCreated: true
  })

  const [errors, setErrors] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    type: '',
    image: ''
  })

  useEffect(() => {
    if (!types.length) {
      dispatch(getTypes())
    }
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
        toast.error('Max 2 types allowed', {
          position: 'bottom-center'
        })
      }
    } else if (name === 'name' || name === 'image') {
      setPokemon({ ...pokemon, [name]: value })
    } else {
      setPokemon({ ...pokemon, [name]: Number(value) })
    }

    setErrors(validatePokemon(name, value))
  }

  const handleRemove = (typeName: string) => {
    setPokemon((pokemon) => ({
      ...pokemon,
      type: pokemon.type.filter(({ name }) => name !== typeName)
    }))
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
      )
    ) {
      toast.error('Complete all fields', {
        position: 'bottom-center'
      })
    } else {
      dispatch(postPokemon(pokemon))
      resetPokemon(setPokemon)
    }
  }

  const pokemonTypes = types.map(({ _id, name }) => (
    <option key={_id} value={name}>
      {capitalize(name)}
    </option>
  ))

  const pokemonTypesList = pokemon.type.map(({ name }) => {
    return (
      <TypeListContainer key={name} onClick={() => handleRemove(name)}>
        <TypeList key={name}>{capitalize(name)}</TypeList>
        <IconRemoveType alt="remove" src={icon_remove} />
      </TypeListContainer>
    )
  })

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Create Pokémon</Title>
        <Form>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="name">Name: </Label>
              <Input
                name="name"
                type="text"
                value={pokemon.name.toLowerCase()}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.name ? <ErrorSpan>{errors.name}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="hp">HP: </Label>
              <Input
                name="hp"
                type="number"
                value={pokemon.hp === 0 ? '' : pokemon.hp}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.hp ? <ErrorSpan>{errors.hp}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="attack">Attack: </Label>
              <Input
                name="attack"
                type="number"
                value={pokemon.attack === 0 ? '' : pokemon.attack}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.attack ? <ErrorSpan>{errors.attack}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="defense">Defense: </Label>
              <Input
                name="defense"
                type="number"
                value={pokemon.defense === 0 ? '' : pokemon.defense}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.defense ? <ErrorSpan>{errors.defense}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="speed">Speed: </Label>
              <Input
                name="speed"
                type="number"
                value={pokemon.speed === 0 ? '' : pokemon.speed}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.speed ? <ErrorSpan>{errors.speed}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="height">Height: </Label>
              <Input
                name="height"
                type="number"
                value={pokemon.height === 0 ? '' : pokemon.height}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.height ? <ErrorSpan>{errors.height}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="weight">Weight: </Label>
              <Input
                name="weight"
                type="number"
                value={pokemon.weight === 0 ? '' : pokemon.weight}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.weight ? <ErrorSpan>{errors.weight}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label>Image: </Label>
              <Input
                name="image"
                placeholder="https://example.com"
                type="text"
                value={pokemon.image}
                onChange={handleChange}
              />
            </LabelInputContainer>
            {errors.image ? <ErrorSpan>{errors.image}</ErrorSpan> : null}
          </FormItem>
          <FormItem>
            <LabelInputContainer>
              <Label htmlFor="types">Type: </Label>
              <SelectBox
                id="type"
                name="type"
                value={pokemon.type.map(({ name }) => name)}
                onChange={handleChange}
              >
                {pokemonTypes}
              </SelectBox>
            </LabelInputContainer>
            {errors.type ? <ErrorSpan>{errors.type}</ErrorSpan> : null}
            <PokemonTypesList>{pokemonTypesList}</PokemonTypesList>
          </FormItem>
        </Form>
        <ButtonsContainer>
          <SubmitButton disabled={isLoading} type="submit">
            <ButtonText>
              {isLoading ? 'Creating...' : 'Create Pokémon'}
            </ButtonText>
          </SubmitButton>
          <SubmitButton type="button" onClick={() => resetPokemon(setPokemon)}>
            <ButtonText>Clear form</ButtonText>
          </SubmitButton>
        </ButtonsContainer>
      </FormContainer>
      <Toaster closeButton />
    </Container>
  )
}
