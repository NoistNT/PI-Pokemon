/* eslint-disable react/prop-types */
import { CardsContainer } from '../StyledComponents/StyledCards'
import Card from '../Card/Card'

export default function Cards({ pokemons }) {
  return (
    <CardsContainer>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardsContainer>
  )
}
