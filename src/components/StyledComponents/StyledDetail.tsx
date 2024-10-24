import type { PokemonTypesProps } from '@/types/types'

import styled from 'styled-components'

import { typeColor } from '@/types/types'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  background-color: var(--card-bg);
  color: var(--text-color);
  max-width: 65rem;
  padding: 1rem;
  margin: 1.5rem auto;
  border-style: solid;
  border-color: #ffffff36;
  border-radius: 0.85rem;
  background: linear-gradient(
    82.3deg,
    rgb(50, 39, 66) 0%,
    rgb(76, 71, 139) 100%
  );
  box-shadow: 0 2px 4px var(--card-shadow);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: all 0.48s;
  }

  @media screen and (max-width: 1100px) {
    margin: 1.5rem 1rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 20rem;
    margin: 1rem auto;
  }
`

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 1;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  position: relative;
  z-index: 1;
  margin: 1rem 0 0 0;
  font-size: 2.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);

  @media screen and (max-width: 768px) {
    margin: auto;
    font-size: 2rem;
  }
`

export const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 20rem;
  height: 20rem;
  filter: drop-shadow(0 2px 7px #101010);
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, rgba(0, 0, 0, 0.1));

  @media screen and (max-width: 768px) {
    width: 15rem;
    height: 15rem;
    margin-bottom: 1rem;
  }
`

export const StatsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
`

export const Stats = styled.h3`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  width: 95%;
  padding: 0.5rem 0.5rem 0.5rem 0;
  margin-bottom: 0.5rem;
  z-index: 1;
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--text-color);
  border-bottom: 1px solid #ffffff36;
  text-shadow: 2px 2px 4px #292929;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const DetailTypesContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 0.2rem;
  gap: 0.5rem;
  width: 100%;
`

export const Types = styled.span<PokemonTypesProps>`
  position: relative;
  height: fit-content;
  z-index: 1;
  padding: 0.4rem 1.2rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  text-align: center;
  background-color: ${(props) =>
    typeColor[props.type as keyof typeof typeColor] || '#999999'};
  color: var(--text-color);

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const Attribute = styled.span`
  position: relative;
  font-size: medium;
  padding: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const AttributeValue = styled(Attribute)`
  font-weight: 400;
`

export const Item = styled.p`
  position: relative;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.05);
  border-radius: 0.45rem;
  font-size: 0.9rem;
  margin: 0.5rem auto;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  transition: all 0.15s ease;

  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
    transition: all 0.15s ease;
  }
`

export const Highlight = styled(Item)`
  background-color: rgb(255, 255, 255, 0.2);

  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
  }
`
