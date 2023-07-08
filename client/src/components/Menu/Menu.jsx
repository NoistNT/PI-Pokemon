import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPokemonsSource,
  getSorted,
  getTypes
} from '../../redux/actions/actions'
import {
  Container,
  SelectContainer,
  Label,
  SelectBox
} from '../StyledComponents/StyledMenu'

export default function Menu() {
  const dispatch = useDispatch()
  const types = useSelector((state) => state.types)

  const handleSource = useCallback(
    (e) => {
      const selectedOption = e.target.value
      dispatch(getPokemonsSource(selectedOption))
    },
    [dispatch]
  )

  const handleSort = useCallback(
    (e) => {
      const selectedSort = e.target.value
      dispatch(getSorted(selectedSort))
    },
    [dispatch]
  )

  const handleTypes = useCallback(
    (e) => {
      const selectedFilter = e.target.value
      dispatch(getPokemonsSource(selectedFilter))
    },
    [dispatch]
  )

  return (
    <Container>
      <SelectContainer>
        <Label>Filter</Label>
        <SelectBox id='filter' name='filter' onChange={handleSource}>
          <option value='all'>All</option>
          <option value='api'>API</option>
          <option value='database'>Database</option>
        </SelectBox>
      </SelectContainer>
      <SelectContainer>
        <Label>Sort</Label>
        <SelectBox id='sort' name='sort' onChange={handleSort}>
          <option value=''>--Select sorting--</option>
          <option value='az'>A to Z</option>
          <option value='za'>Z to A</option>
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
        <Label>Pokémon types</Label>
        <SelectBox id='getTypes' name='getTypes' onChange={handleTypes}>
          <option value=''>--Types--</option>
          <option value='all'>All types</option>
          {types.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </SelectBox>
      </SelectContainer>
    </Container>
  )
}
