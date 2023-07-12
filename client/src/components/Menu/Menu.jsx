/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capitalize } from '../../helpers/helpers'
import { getPokemonsByType } from '../../redux/actions/pokemonActions'
import {
  // getPokemonsBySource,
  getTypes
} from '../../redux/actions/pokemonAsyncActions'
import {
  getPokemonsSorted,
  resetFilters
} from '../../redux/actions/pokemonActions'
import {
  Container,
  Title,
  SelectGroup,
  SelectContainer,
  Label,
  SelectBox,
  Button
} from '../StyledComponents/StyledMenu'

export default function Menu({ setSort, setFilters, setCurrentPage }) {
  const dispatch = useDispatch()
  const selectSourceRef = useRef(null)
  const selectSortRef = useRef(null)
  const selectTypesRef = useRef(null)
  const { types } = useSelector((state) => state.pokemonReducer)

  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  // const handleSource = useCallback(
  //   (e) => {
  //     const selectedOption = e.target.value
  //     setCurrentPage(1)
  //     dispatch(getPokemonsBySource(selectedOption))
  //   },
  //   [dispatch, setCurrentPage]
  // )

  const handleSort = useCallback(
    (e) => {
      const selectedSort = e.target.value
      setSort(selectedSort)
      setCurrentPage(1)
      dispatch(getPokemonsSorted(selectedSort))
    },
    [dispatch, setSort, setCurrentPage]
  )

  const handleTypes = useCallback(
    (e) => {
      const selectedType = e.target.value
      setFilters(selectedType)
      setCurrentPage(1)
      dispatch(getPokemonsByType(selectedType))
    },
    [dispatch, setFilters, setCurrentPage]
  )

  const handleReset = () => {
    selectSourceRef.current.value = ''
    selectSortRef.current.value = ''
    selectTypesRef.current.value = ''
    dispatch(resetFilters())
  }

  const pokemonTypes = types.map((type) => (
    <option key={type.id} value={type.name}>
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
            id='filter'
            name='filter'
            title='filter'
            ref={selectSourceRef}
            // onChange={handleSource}
          >
            <option value=''>--Source--</option>
            <option value='api'>Originals</option>
            <option value='database'>User created</option>
          </SelectBox>
        </SelectContainer>
        <SelectContainer>
          <Label>Sort</Label>
          <SelectBox
            id='sort'
            name='sort'
            title='sort'
            ref={selectSortRef}
            onChange={handleSort}
          >
            <option value=''>--Sorting--</option>
            <option value='asc'>A to Z</option>
            <option value='desc'>Z to A</option>
            <option value='higherAtk'>Higher attack</option>
            <option value='lowerAtk'>Lower attack</option>
            <option value='higherDef'>Higher defense</option>
            <option value='lowerDef'>Lower defense</option>
            <option value='higherHp'>Higher hp</option>
            <option value='lowerHp'>Lower hp</option>
            <option value='higherSpd'>Higher speed</option>
            <option value='lowerSpd'>Lower speed</option>
          </SelectBox>
        </SelectContainer>
        <SelectContainer>
          <Label>Types</Label>
          <SelectBox
            id='types'
            name='types'
            title='types'
            ref={selectTypesRef}
            onChange={handleTypes}
          >
            <option value=''>--Types--</option>
            {pokemonTypes}
          </SelectBox>
        </SelectContainer>
      </SelectGroup>
      <Button type='button' onClick={handleReset}>
        Reset
      </Button>
    </Container>
  )
}
