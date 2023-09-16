import { Toaster, toast } from 'sonner'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, postPokemon } from '../../redux/actions/pokemonAsyncActions'
import { capitalize, resetPokemon } from '../../helpers/helpers'
import { validatePokemon } from '../../helpers/validatePokemon'
import {
  FormContainer,
  Title,
  FormGroup,
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
  ButtonText
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
    image: '',
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
        setPokemon({ ...pokemon, type: [...pokemon.type, value] })
      } else {
        toast.error('Max 2 types allowed')
      }
    } else {
      setPokemon({ ...pokemon, [name]: value })
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

    if (
      Object.values(pokemon).some((value) => value === '') ||
      Object.keys(errors).length
    ) {
      toast.error('Complete all fields')
      return
    }

    dispatch(postPokemon(pokemon))
    toast.success('Pokemon created successfully')
    resetPokemon(setPokemon)
  }

  const pokemonTypes = types.map((type) => (
    <option key={type.id} value={type.name}>
      {capitalize(type.name)}
    </option>
  ))

  const pokemonTypesList = pokemon.type.map((type) => {
    return (
      <TypeListContainer key={type} onClick={() => handleRemove(type)}>
        <TypeList key={type}>{capitalize(type)}</TypeList>
        <IconRemoveType src={icon_remove} alt='remove' />
      </TypeListContainer>
    )
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Create Pokémon</Title>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='name'>Name: </Label>
            <Input
              type='text'
              name='name'
              value={pokemon.name.toLowerCase()}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.name && <ErrorSpan>{errors.name}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='hp'>HP: </Label>
            <Input
              type='number'
              name='hp'
              value={pokemon.hp}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.hp && <ErrorSpan>{errors.hp}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='attack'>Attack: </Label>
            <Input
              type='number'
              name='attack'
              value={pokemon.attack}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.attack && <ErrorSpan>{errors.attack}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='defense'>Defense: </Label>
            <Input
              type='number'
              name='defense'
              value={pokemon.defense}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.defense && <ErrorSpan>{errors.defense}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='speed'>Speed: </Label>
            <Input
              type='number'
              name='speed'
              value={pokemon.speed}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.speed && <ErrorSpan>{errors.speed}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='height'>Height: </Label>
            <Input
              type='number'
              name='height'
              value={pokemon.height}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.height && <ErrorSpan>{errors.height}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='weight'>Weight: </Label>
            <Input
              type='number'
              name='weight'
              value={pokemon.weight}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.weight && <ErrorSpan>{errors.weight}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label>Image: </Label>
            <Input
              type='text'
              name='image'
              placeholder='URL Image'
              value={pokemon.image}
              onChange={handleChange}
            />
          </LabelInputContainer>
          {errors.image && <ErrorSpan>{errors.image}</ErrorSpan>}
        </FormGroup>
        <FormGroup>
          <LabelInputContainer>
            <Label htmlFor='types'>Type: </Label>
            <SelectBox
              name='type'
              id='type'
              value={pokemon.type}
              onChange={handleChange}
            >
              {pokemonTypes}
            </SelectBox>
          </LabelInputContainer>
          {errors.type && <ErrorSpan>{errors.type}</ErrorSpan>}
          {pokemonTypesList}
        </FormGroup>
        <ButtonsContainer>
          <SubmitButton type='submit'>
            <ButtonText>Create Pokémon</ButtonText>
          </SubmitButton>
          <SubmitButton type='button' onClick={() => resetPokemon(setPokemon)}>
            <ButtonText>Clear form</ButtonText>
          </SubmitButton>
        </ButtonsContainer>
      </FormContainer>
      <Toaster closeButton={true} richColors={true} />
    </div>
  )
}
