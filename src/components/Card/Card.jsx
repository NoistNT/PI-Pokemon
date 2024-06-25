import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Remove from './Remove'

import default_image from '@/assets/default_img.webp'
import {
  CardContainer,
  Image,
  Name,
  Types,
  TypesContainer
} from '@/components/StyledComponents/StyledCard'
import { capitalize } from '@/helpers/helpers'
import { removePokemonByIdLocal } from '@/redux/actions/pokemonActions'
import { removePokemonById } from '@/redux/actions/pokemonAsyncActions'

export default function Card({ pokemon }) {
  const { id, name, type, image, userCreated } = pokemon
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removePokemonById(id))
    dispatch(removePokemonByIdLocal(id))
  }

  return (
    <CardContainer>
      {userCreated ? <Remove handleRemove={handleRemove} /> : null}
      <Image alt={name} className="lazy" data-src={image} src={default_image} />
      <Link to={`/pokemon/${id}`}>
        <Name>{capitalize(name)}</Name>
      </Link>
      <TypesContainer>
        {type.map((t) => (
          <Types key={t.name} type={t.name}>
            {capitalize(t.name)}
          </Types>
        ))}
      </TypesContainer>
    </CardContainer>
  )
}
