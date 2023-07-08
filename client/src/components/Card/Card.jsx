/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { capitalize } from '../../helpers/helpers'
import {
  CardContainer,
  Image,
  Name,
  TypesContainer,
  Types
} from '../StyledComponents/StyledCard'

export default function Card({ pokemon }) {
  const { id, name, type, image } = pokemon
  const types = type.map((t, index) => (
    <Types key={index}>{capitalize(t)}</Types>
  ))

  return (
    <CardContainer>
      <Link to={`/pokemon/${id}`}>
        <Image src={image} alt={name} />
        <Name>{capitalize(name)}</Name>
        <TypesContainer>{types}</TypesContainer>
      </Link>
    </CardContainer>
  )
}
