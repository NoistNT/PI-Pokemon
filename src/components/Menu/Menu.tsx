import { useCallback, useEffect, useRef } from 'react'

import {
  Button,
  ButtonText,
  Container,
  Label,
  SelectBox,
  SelectContainer,
  SelectGroup,
  Title
} from '@/components/StyledComponents/StyledMenu'
import { capitalize } from '@/helpers/helpers'
import {
  resetFilters,
  setCurrentPage,
  setSort,
  setSource,
  setType
} from '@/redux/actions/pokemon-actions'
import { getTypes } from '@/redux/actions/type-actions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Menu() {
  const dispatch = useAppDispatch()
  const selectSourceRef = useRef<HTMLSelectElement>(null)
  const selectSortRef = useRef<HTMLSelectElement>(null)
  const selectTypesRef = useRef<HTMLSelectElement>(null)
  const { types } = useAppSelector(({ types }) => types)

  useEffect(() => {
    if (!types.length) {
      dispatch(getTypes())
    }
  }, [dispatch, types])

  const handleSource = useCallback(
    (value: string) => {
      dispatch(setCurrentPage(1))
      dispatch(setSource(value))
    },
    [dispatch]
  )

  const handleSort = useCallback(
    (value: string) => {
      dispatch(setCurrentPage(1))
      dispatch(setSort(value))
    },
    [dispatch]
  )

  const handleTypes = useCallback(
    (value: string) => {
      dispatch(setCurrentPage(1))
      dispatch(setType(value))
    },
    [dispatch]
  )

  const handleReset = () => {
    if (selectSourceRef.current) {
      selectSourceRef.current.selectedIndex = 0
    }
    if (selectSortRef.current) {
      selectSortRef.current.selectedIndex = 0
    }
    if (selectTypesRef.current) {
      selectTypesRef.current.selectedIndex = 0
    }
    dispatch(resetFilters())
    dispatch(setCurrentPage(1))
  }

  const pokemonTypes = types.map(({ _id, name }) => (
    <option key={_id} value={name}>
      {capitalize(name)}
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
            defaultValue="all"
            id="filter"
            name="filter"
            title="filter"
            onChange={(e) => handleSource(e.target.value)}
          >
            <option value="all">All Pokemons</option>
            <option value="api">Originals</option>
            <option value="db">User created</option>
          </SelectBox>
        </SelectContainer>
        <SelectContainer>
          <Label>Sort</Label>
          <SelectBox
            ref={selectSortRef}
            defaultValue="asc"
            id="sort"
            name="sort"
            title="sort"
            onChange={(e) => handleSort(e.target.value)}
          >
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
            defaultValue="all"
            id="types"
            name="types"
            title="types"
            onChange={(e) => handleTypes(e.target.value)}
          >
            <option value="all">All</option>
            {pokemonTypes}
          </SelectBox>
        </SelectContainer>
      </SelectGroup>
      <Button type="button" onClick={handleReset}>
        <ButtonText>Reset filters</ButtonText>
      </Button>
    </Container>
  )
}
