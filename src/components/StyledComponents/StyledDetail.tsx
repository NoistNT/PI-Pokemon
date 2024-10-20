import type { PokemonTypesProps } from '@/types/types'

import styled from 'styled-components'

import { typeColor } from '@/types/types'

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 20rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  padding: 1rem;
  margin: 1.5rem auto;
  margin-top: 2.6rem;
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
`

export const Title = styled.h2`
  position: relative;
  z-index: 1;
  margin: 1rem 0 0 0;
  font-size: 2.5rem;
  color: var(--text-color);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Image = styled.img`
  position: relative;
  z-index: 1;
  width: 18rem;
  height: 18rem;
  margin-bottom: 2rem;
  filter: drop-shadow(0 2px 7px #101010);
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, rgba(0, 0, 0, 0.1));
`

export const Stats = styled.h3`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  width: 90%;
  padding: 0.5rem 0.5rem 0.5rem 0;
  margin-bottom: 0.5rem;
  z-index: 1;
  font-weight: 600;
  font-size: 1.3rem;
  border-bottom: 1px solid #ffffff36;
`

export const Types = styled.span<PokemonTypesProps>`
  position: relative;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  text-shadow: 2px 2px 4px #272727;
  background-color: ${(props) =>
    typeColor[props.type as keyof typeof typeColor] || '#999999'};
  color: var(--text-color);
`

export const Attribute = styled.span`
  position: relative;
  z-index: 1;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`

export const Item = styled.p`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  font-size: 1.07rem;
  color: #fcfcfc;
  padding: 0.25rem 3.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`

export const Highlight = styled.p`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  font-size: 1.07rem;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 0.45rem;
  color: #fcfcfc;
  padding: 0.25rem 3.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
`
