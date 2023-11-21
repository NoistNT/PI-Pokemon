import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { capitalize, types } from '../../helpers/helpers'
import Loader from '../../components/Loader/Loader'
import { getPokemonById } from '../../redux/actions/pokemonAsyncActions'
import { cleanDetail } from '../../redux/actions/pokemonActions'
import {
  CardContainer,
  Title,
  Image,
  Name,
  Attribute,
  Highlight,
  Item
} from '../../components/StyledComponents/StyledDetail'

export default function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { pokemon, isLoading } = useSelector((state) => state.pokemonReducer)

  useEffect(() => {
    dispatch(getPokemonById(id))

    return () => dispatch(cleanDetail())
  }, [dispatch, id])

  if (isLoading) {
    return <Loader />
  }

  return (
    <CardContainer>
      <Title>Pokémon details</Title>
      <Image alt={pokemon.name} src={pokemon.image} />
      <Name>{capitalize(pokemon.name)}</Name>
      <Highlight>
        <Attribute>Type: </Attribute>
        {types(pokemon.type)}
      </Highlight>
      <Item>
        <Attribute>HP: </Attribute>
        {pokemon.hp}
      </Item>
      <Highlight>
        <Attribute>Attack: </Attribute>
        {pokemon.attack}
      </Highlight>
      <Item>
        <Attribute>Defense: </Attribute>
        {pokemon.defense}
      </Item>
      <Highlight>
        <Attribute>Speed: </Attribute>
        {pokemon.speed}
      </Highlight>
      <Item>
        <Attribute>Height: </Attribute>
        {pokemon.height}
      </Item>
      <Highlight>
        <Attribute>Weight: </Attribute>
        {pokemon.weight}
      </Highlight>
    </CardContainer>
  )
}
