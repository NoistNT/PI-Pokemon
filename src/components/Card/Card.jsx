import { Link } from 'react-router-dom'
import { capitalize } from '../../helpers/helpers'
import {
  CardContainer,
  Image,
  Name,
  TypesContainer,
  Types
} from '../StyledComponents/StyledCard'
import default_image from '../../assets/default_img.webp'

export default function Card({ pokemon }) {
  const { id, name, type, image } = pokemon
  const types = type.map((t, index) => (
    <Types key={index}>{capitalize(t)}</Types>
  ))

  return (
    <CardContainer>
      <Link to={`/pokemon/${id}`}>
        <Image
          src={default_image}
          data-src={image}
          alt={name}
          className='lazy'
        />
        <Name>{capitalize(name)}</Name>
        <TypesContainer>{types}</TypesContainer>
      </Link>
    </CardContainer>
  )
}
