import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { capitalize } from '../../helpers/helpers'
import { getTypes } from '../../redux/actions/pokemonAsyncActions'
import {
  getPokemonsBySource,
  getPokemonsSorted,
  getPokemonsByType,
  setCurrentPage,
  resetFilters
} from '../../redux/actions/pokemonActions'
import {
  Container,
  Title,
  SelectGroup,
  SelectContainer,
  Label,
  SelectBox,
  Button,
  ButtonText
} from '../StyledComponents/StyledMenu'

export default function Menu() {
  const dispatch = useDispatch()
  const selectSourceRef = useRef(null)
  const selectSortRef = useRef(null)
  const selectTypesRef = useRef(null)
  const { types } = useSelector((state) => state.pokemonReducer)

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  const handleSource = useCallback(
    (e) => {
      const selectedOption = e.target.value

      dispatch(setCurrentPage(1))
      dispatch(getPokemonsBySource(selectedOption))
    },
    [dispatch]
  )

  const handleSort = useCallback(
    (e) => {
      const selectedSort = e.target.value

      dispatch(setCurrentPage(1))
      dispatch(getPokemonsSorted(selectedSort))
    },
    [dispatch]
  )

  const handleTypes = useCallback(
    (e) => {
      const selectedType = e.target.value

      dispatch(setCurrentPage(1))
      dispatch(getPokemonsByType(selectedType))
    },
    [dispatch]
  )

  const handleReset = () => {
    selectSourceRef.current.value = ''
    selectSortRef.current.value = ''
    selectTypesRef.current.value = ''
    dispatch(resetFilters())
    dispatch(setCurrentPage(1))
  }

  const pokemonTypes = types.map((type) => (
    <option key={type._id} value={type.name}>
      {capitalize(type.name)}
    </option>
  ))

  return (
    <Container>
      <Title>Pokémenu</Title>
      <SelectGroup>
        <SelectContainer>
          <Label>Source</Label>
          <SelectBox
            ref={selectSourceRef}
            id="filter"
            name="filter"
            title="filter"
            onChange={handleSource}
          >
            <option value="">--Source--</option>
            <option value="api">Originals</option>
            <option value="db">User created</option>
          </SelectBox>
        </SelectContainer>
        <SelectContainer>
          <Label>Sort</Label>
          <SelectBox
            ref={selectSortRef}
            id="sort"
            name="sort"
            title="sort"
            onChange={handleSort}
          >
            <option value="">--Sorting--</option>
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
            <option value="higherAtk">Higher attack</option>
            <option value="lowerAtk">Lower attack</option>
            <option value="higherDef">Higher defense</option>
            <option value="lowerDef">Lower defense</option>
            <option value="higherHp">Higher hp</option>
            <option value="lowerHp">Lower hp</option>
            <option value="higherSpd">Higher speed</option>
            <option value="lowerSpd">Lower speed</option>
          </SelectBox>
        </SelectContainer>
        <SelectContainer>
          <Label>Types</Label>
          <SelectBox
            ref={selectTypesRef}
            id="types"
            name="types"
            title="types"
            onChange={handleTypes}
          >
            <option value="">--Types--</option>
            {pokemonTypes}
          </SelectBox>
        </SelectContainer>
      </SelectGroup>
      <Button type="button" onClick={handleReset}>
        <ButtonText>Reset</ButtonText>
      </Button>
    </Container>
  )
}
