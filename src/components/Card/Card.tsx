import type { Pokemon } from '@/types/types'

import { Link } from 'react-router-dom'

import { Remove } from '@/components/Card/Remove'
import {
  CardContainer,
  Image,
  Name,
  Types,
  TypesContainer,
  type PokemonType
} from '@/components/StyledComponents/StyledCard'
import { capitalize } from '@/helpers/helpers'
import { removePokemonLocal } from '@/redux/actions/pokemonActions'
import { removePokemon } from '@/redux/actions/pokemonAsyncActions'
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
    dispatch(removePokemonLocal(id.toString()))
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
          <Types key={name} type={name as PokemonType}>
            {capitalize(name)}
          </Types>
        ))}
      </TypesContainer>
    </CardContainer>
  )
}
