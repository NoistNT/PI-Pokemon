/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { capitalize } from '../../helpers/capitalize'
import {
  CardContainer,
  Image,
  Name,
  TypesContainer,
  Types
} from '../StyledComponents/StyledCard'

export default function Card({ pokemon }) {
  const { id, name, type, image } = pokemon
  const typeElements = type.map((type, index) => (
    <Types key={index}>{capitalize(type)}</Types>
  ))

  return (
    <CardContainer>
      <Link to={`/pokemon/${id}`}>
        <Image src={image} alt={name} />
        <Name>{capitalize(name)}</Name>
      </Link>
      <TypesContainer>{typeElements}</TypesContainer>
    </CardContainer>
  )
}
