import type { PokemonTypes } from '@/types/types'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '@/components/Loader/Loader'
import {
  Attribute,
  CardContainer,
  Highlight,
  Image,
  Item,
  Stats,
  Title,
  Types
} from '@/components/StyledComponents/StyledDetail'
import { capitalize } from '@/helpers/helpers'
import { cleanDetail } from '@/redux/actions/pokemonActions'
import { getPokemonById } from '@/redux/actions/pokemonAsyncActions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Detail() {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const {
    pokemon: { attack, defense, height, hp, image, name, speed, type, weight },
    isLoading
  } = useAppSelector(({ pokemons }) => pokemons)

  useEffect(() => {
    if (id) {
      dispatch(getPokemonById(id))
    }

    return () => {
      dispatch(cleanDetail())
    }
  }, [dispatch, id])

  if (isLoading) return <Loader />

  return (
    <CardContainer>
      <Title>{capitalize(name)}</Title>
      <Image alt={name} src={image} />
      <Stats>Stats</Stats>
      <Highlight>
        <Attribute>Types: </Attribute>
        {type.map(({ name }) => (
          <Types key={name} type={name as PokemonTypes}>
            {capitalize(name)}
          </Types>
        ))}
      </Highlight>

      <Item>
        <Attribute>HP: </Attribute>
        {hp}
      </Item>
      <Highlight>
        <Attribute>Attack: </Attribute>
        {attack}
      </Highlight>
      <Item>
        <Attribute>Defense: </Attribute>
        {defense}
      </Item>
      <Highlight>
        <Attribute>Speed: </Attribute>
        {speed}
      </Highlight>
      <Item>
        <Attribute>Height: </Attribute>
        {height}
      </Item>
      <Highlight>
        <Attribute>Weight: </Attribute>
        {weight}
      </Highlight>
    </CardContainer>
  )
}
