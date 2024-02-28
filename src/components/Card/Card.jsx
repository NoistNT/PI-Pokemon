import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { capitalize } from '../../helpers/helpers'
import {
  CardContainer,
  Image,
  Name,
  TypesContainer,
  Types
} from '../StyledComponents/StyledCard'
import default_image from '../../assets/default_img.webp'
import { removePokemonById } from '../../redux/actions/pokemonAsyncActions'
import { removePokemonByIdLocal } from '../../redux/actions/pokemonActions'

import Remove from './Remove'

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
