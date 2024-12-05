import { Card } from '@/components/Card/Card';
import { SkeletonCard } from '@/components/Card/SkeletonCard';
import { CardsContainer, Container } from '@/components/StyledComponents/StyledCards';
import type { Pokemon } from '@/types/types';
import { POKEMONS_PER_PAGE } from '@/utils/config';

interface Props {
  pokemons: Pokemon[];
}

export function Cards({ pokemons }: Props) {
  const arr = Array.from({ length: POKEMONS_PER_PAGE }, (_, i) => i);
  const skeletons = arr.map((i) => <SkeletonCard key={i} />);

  return (
    <Container>
      <CardsContainer>
        {pokemons.length
          ? pokemons.map((pokemon) => (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))
          : skeletons}
      </CardsContainer>
    </Container>
  );
}
