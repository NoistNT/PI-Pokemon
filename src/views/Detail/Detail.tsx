import { useEffect } from 'react';
import { useParams } from 'react-router';

import {
  Attribute,
  AttributeValue,
  CardContainer,
  DetailTypesContainer,
  HeaderContainer,
  Highlight,
  Image,
  Item,
  Stats,
  StatsContainer,
  Title,
  Types,
} from '@/components/StyledComponents/StyledDetail';
import { capitalize } from '@/helpers/helpers';
import { cleanDetail } from '@/redux/actions/pokemon-actions';
import { getPokemonById } from '@/redux/actions/pokemon-async-actions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import type { PokemonTypes } from '@/types/types';
import { SkeletonDetailCard } from '@/views/Detail/SkeletonDetail';

function Detail() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const {
    pokemon: { attack, defense, height, hp, image, name, speed, type, weight },
    isLoading,
  } = useAppSelector(({ pokemons }) => pokemons);

  useEffect(() => {
    if (id) {
      dispatch(getPokemonById(id));
    }

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  if (isLoading) return <SkeletonDetailCard />;

  return (
    <CardContainer>
      <HeaderContainer>
        <Title>{capitalize(name)}</Title>
        <Image
          alt={name}
          src={image}
        />
      </HeaderContainer>
      <StatsContainer>
        <Stats>Stats</Stats>
        <Highlight>
          <Attribute>Types: </Attribute>
          <DetailTypesContainer>
            {type.map(({ name }) => (
              <Types
                key={name}
                type={name as PokemonTypes}
              >
                {capitalize(name)}
              </Types>
            ))}
          </DetailTypesContainer>
        </Highlight>
        <Item>
          <Attribute>HP: </Attribute>
          <AttributeValue>{hp}</AttributeValue>
        </Item>
        <Highlight>
          <Attribute>Attack: </Attribute>
          <AttributeValue>{attack}</AttributeValue>
        </Highlight>
        <Item>
          <Attribute>Defense: </Attribute>
          <AttributeValue>{defense}</AttributeValue>
        </Item>
        <Highlight>
          <Attribute>Speed: </Attribute>
          <AttributeValue>{speed}</AttributeValue>
        </Highlight>
        <Item>
          <Attribute>Height: </Attribute>
          <AttributeValue>{height}</AttributeValue>
        </Item>
        <Highlight>
          <Attribute>Weight: </Attribute>
          <AttributeValue>{weight}</AttributeValue>
        </Highlight>
      </StatsContainer>
    </CardContainer>
  );
}

export { Detail };
