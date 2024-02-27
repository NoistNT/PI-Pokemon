import { Toaster, toast } from 'sonner'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTypes, postPokemon } from '../../redux/actions/pokemonAsyncActions'
import { capitalize, resetPokemon } from '../../helpers/helpers'
import { validatePokemon } from '../../helpers/validatePokemon'
import {
  Container,
  FormContainer,
  Title,
  Form,
  FormItem,
  Label,
  Input,
  SelectBox,
  LabelInputContainer,
  TypeListContainer,
  TypeList,
  IconRemoveType,
  ErrorSpan,
  ButtonsContainer,
  SubmitButton,
  ButtonText,
  PokemonTypesList
} from '../../components/StyledComponents/StyledForm'
import Loader from '../../components/Loader/Loader'
import icon_remove from '../../assets/icon_remove.svg'

export default function CreatePokemon() {
  const dispatch = useDispatch()
  const { types, isLoading } = useSelector((state) => state.pokemonReducer)

  const [pokemon, setPokemon] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image:
      'https://res.cloudinary.com/dsg5ofk4e/image/upload/v1709047835/pokewiki/60f684ec58ea6ded58112eac2324bfa8.webp',
    type: []
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'type') {
      if (pokemon.type.length < 2) {
        setPokemon({
          ...pokemon,
          type: [...pokemon.type, value]
        })
      } else {
        toast.error('Max 2 types allowed', {
          position: 'bottom-center'
        })
      }
    } else if (name === 'name' || name === 'image') {
      setPokemon({ ...pokemon, [name]: value })
    } else {
      setPokemon({ ...pokemon, [name]: +value })
    }

    setErrors(validatePokemon(name, value))
  }

  const handleRemove = (typeToRemove) => {
    setPokemon((pokemon) => ({
      ...pokemon,
      type: pokemon.type.filter((type) => type !== typeToRemove)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    pokemon.image =
      'https://res.cloudinary.com/dsg5ofk4e/image/upload/v1709047835/pokewiki/60f684ec58ea6ded58112eac2324bfa8.webp'
    if (
      Object.values(pokemon).some((value) => value === '') ||
      Object.keys(errors).length
    ) {
      toast.error('Complete all fields', {
        position: 'bottom-center'
      })
    } else {
      toast.success('Pokemon created successfully', {
        position: 'bottom-center'
      })
      setTimeout(() => {
        dispatch(postPokemon(pokemon))
      }, 2200)
      setTimeout(() => {
        resetPokemon(setPokemon)
      }, 2300)
    }
  }

  const pokemonTypes = types.map((type) => (
    <option key={type._id} value={type.name}>
      {capitalize(type.name)}
    </option>
  ))

  const pokemonTypesList = pokemon.type.map((type) => {
    return (
      <TypeListContainer key={type} onClick={() => handleRemove(type)}>
        <TypeList key={type}>{capitalize(type)}</TypeList>
        <IconRemoveType alt="remove" src={icon_remove} />
      </TypeListContainer>
    )
  })

  if (isLoading) {
    return <Loader />
  }

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
                value={pokemon.hp}
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
                value={pokemon.attack}
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
                value={pokemon.defense}
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
                value={pokemon.speed}
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
                value={pokemon.height}
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
                value={pokemon.weight}
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
                placeholder="URL Image"
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
                value={pokemon.type}
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
          <SubmitButton type="submit">
            <ButtonText>Create Pokémon</ButtonText>
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
