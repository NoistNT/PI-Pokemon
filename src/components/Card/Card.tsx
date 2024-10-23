import type { Pokemon, PokemonTypes } from '@/types/types'

import { Link } from 'react-router-dom'

import { Remove } from '@/components/Card/Remove'
import {
  CardContainer,
  Image,
  Name,
  Types,
  TypesContainer
} from '@/components/StyledComponents/StyledCard'
import { capitalize } from '@/helpers/helpers'
import { getPokemons, removePokemon } from '@/redux/actions/pokemonAsyncActions'
import { useAppDispatch } from '@/redux/hooks'

interface Props {
  pokemon: Pokemon
}

export default function Card({
  pokemon: { id, name, image, type, userCreated }
}: Props) {
  const dispatch = useAppDispatch()

  const handleRemove = () => {
    dispatch(removePokemon(id.toString()))
    dispatch(getPokemons())
  }

  return (
    <CardContainer>
      {userCreated ? <Remove handleRemove={handleRemove} /> : null}
      <Image alt={name} src={image} />
      <Link to={`/pokemon/${id}`}>
        <Name>{capitalize(name)}</Name>
      </Link>
      <TypesContainer>
        {type.map(({ name }) => (
          <Types key={name} type={name as PokemonTypes}>
            {capitalize(name)}
          </Types>
        ))}
      </TypesContainer>
    </CardContainer>
  )
}
