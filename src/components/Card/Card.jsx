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
import icon_remove from '../../assets/icon_remove.svg'
import { removePokemonById } from '../../redux/actions/pokemonAsyncActions'
import { removePokemonByIdLocal } from '../../redux/actions/pokemonActions'

import Remove from './remove-button'

export default function Card({ pokemon }) {
  const { id, name, type, image, userCreated } = pokemon
  const dispatch = useDispatch()

  const types = type.map((t) => (
    <Types key={t.name} type={t.name}>
      {capitalize(t.name)}
    </Types>
  ))

  const handleRemove = () => {
    dispatch(removePokemonById(id))
    dispatch(removePokemonByIdLocal(id))
  }

  return (
    <CardContainer>
      {userCreated ? (
        <Remove
          alt="remove-pokemon"
          handleRemove={handleRemove}
          src={icon_remove}
        />
      ) : null}
      <Image alt={name} className="lazy" data-src={image} src={default_image} />
      <Link to={`/pokemon/${id}`}>
        <Name>{capitalize(name)}</Name>
      </Link>
      <TypesContainer>{types}</TypesContainer>
    </CardContainer>
  )
}
