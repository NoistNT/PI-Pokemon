import type { PokemonTypes } from '@/types/types'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '@/components/Loader/Loader'
import {
  Attribute,
  AttributeValue,
  CardContainer,
  DetailTypesContainer,
  Highlight,
  Image,
  Item,
  Stats,
  StatsContainer,
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
      <StatsContainer>
        <Stats>Stats</Stats>
        <Highlight>
          <Attribute>Types: </Attribute>
          <DetailTypesContainer>
            {type.map(({ name }) => (
              <Types key={name} type={name as PokemonTypes}>
                {capitalize(name)}
              </Types>
            ))}
          </DetailTypesContainer>
        </Highlight>
        <Item>
          <Attribute>HP: </Attribute>
          <AttributeValue>{hp}</AttributeValue>
        </Item>
        <Highlight>
          <Attribute>Attack: </Attribute>
          <AttributeValue>{attack}</AttributeValue>
        </Highlight>
        <Item>
          <Attribute>Defense: </Attribute>
          <AttributeValue>{defense}</AttributeValue>
        </Item>
        <Highlight>
          <Attribute>Speed: </Attribute>
          <AttributeValue>{speed}</AttributeValue>
        </Highlight>
        <Item>
          <Attribute>Height: </Attribute>
          <AttributeValue>{height}</AttributeValue>
        </Item>
        <Highlight>
          <Attribute>Weight: </Attribute>
          <AttributeValue>{weight}</AttributeValue>
        </Highlight>
      </StatsContainer>
    </CardContainer>
  )
}
