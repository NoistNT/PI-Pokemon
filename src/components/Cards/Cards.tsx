import type { Pokemon } from '@/types/types'

import Card from '@/components/Card/Card'
import {
  CardsContainer,
  Container
} from '@/components/StyledComponents/StyledCards'

interface Props {
  pokemons: Pokemon[]
}

export default function Cards({ pokemons }: Props) {
  return (
    <Container>
      <CardsContainer>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </CardsContainer>
    </Container>
  )
}
