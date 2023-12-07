import { Link } from 'react-router-dom'

import { capitalize } from '../../helpers/helpers'
import { CardContainer, Image, Name, TypesContainer, Types } from '../StyledComponents/StyledCard'
import default_image from '../../assets/default_img.webp'

export default function Card({ pokemon }) {
  const { id, name, type, image } = pokemon
  const types = type.map((t) => <Types key={t}>{capitalize(t)}</Types>)

  return (
    <CardContainer>
      <Link to={`/pokemon/${id}`}>
        <Image alt={name} className="lazy" data-src={image} src={default_image} />
        <Name>{capitalize(name)}</Name>
        <TypesContainer>{types}</TypesContainer>
      </Link>
    </CardContainer>
  )
}
