import type { FilterPokemons, Pokemon, SortOptions, Types } from '@/types/types'

import { toast } from 'sonner'
import styled, { css, keyframes } from 'styled-components'

const randomDelay = (min: number, max: number) => css`
  animation-delay: ${Math.random() * (max - min) + min}s;
`

const shimmer = keyframes`
  0% {
    background-position: -25rem 0;
  }
  100% {
    background-position: 25rem 0;
  }
`

export const SkeletonShimmer = styled.div<{
  duration?: number
  delayRange?: [number, number]
}>`
  transition: all 0.3s ease;
  background-color: #44475a;
  background-image: linear-gradient(
    to right,
    #44475a 0%,
    #555861 25%,
    #44475a 50%,
    #555861 75%,
    #44475a 100%
  );
  background-size: 800px 100%;
  animation: ${shimmer} ${({ duration = 2 }) => duration}s infinite linear;
  ${({ delayRange = [0, 0] }) => randomDelay(delayRange[0], delayRange[1])}
`

export const showToast = (type: 'success' | 'error', message: string) => {
  toast[type](message, { position: 'bottom-right' })
}

export const customError = (error: unknown, message: string) => {
  const errMessage =
    (error as Error).message || message || 'Something went wrong'

  showToast('error', errMessage)
}

export const capitalize = (name: string) => {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : ''
}

export const sanitize = (name: string) => {
  return name.replace(/\s/g, '').toLowerCase()
}

export const types = (types: Types[]) => {
  return types.map(({ name }) => `${capitalize(name)} `)
}

export const sortPokemons = (pokemons: Pokemon[], sortOption: SortOptions) => {
  const sortFuncMap: Record<SortOptions, (a: Pokemon, b: Pokemon) => number> = {
    asc: (a, b) => a.name.localeCompare(b.name),
    desc: (a, b) => b.name.localeCompare(a.name),
    higherAtk: (a, b) => b.attack - a.attack,
    lowerAtk: (a, b) => a.attack - b.attack,
    higherDef: (a, b) => b.defense - a.defense,
    lowerDef: (a, b) => a.defense - b.defense,
    higherHp: (a, b) => b.hp - a.hp,
    lowerHp: (a, b) => a.hp - b.hp,
    higherSpd: (a, b) => b.speed - a.speed,
    lowerSpd: (a, b) => a.speed - b.speed
  }

  const sortFunc = sortFuncMap[sortOption] || (() => 0)

  return [...pokemons].sort(sortFunc)
}

export const filterPokemons = (
  pokemons: Pokemon[],
  { type, source, sortOption }: FilterPokemons
) => {
  let filtered =
    source === 'db'
      ? pokemons.filter(({ userCreated }) => userCreated)
      : source === 'api'
        ? pokemons.filter(({ userCreated }) => !userCreated)
        : pokemons

  filtered =
    type === 'all'
      ? filtered
      : filtered.filter(({ type: PokemonTypes }) =>
          PokemonTypes.some(({ name }) => name === type)
        )

  if (!filtered.length) {
    const err = new Error(`No ${capitalize(type)} pokemons found`)

    customError(err, err.message)
    throw err
  }

  return sortPokemons(filtered, sortOption)
}

export const emptyErrors = {
  name: '',
  hp: '',
  attack: '',
  defense: '',
  speed: '',
  height: '',
  weight: '',
  type: '',
  image: ''
}

export const emptyPokemon = {
  id: '',
  name: '',
  image: '',
  hp: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  height: 0,
  weight: 0,
  type: [],
  userCreated: false
}

export const emptyType = {
  _id: '',
  name: '',
  url: ''
}

export const resetPokemonForm = (
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
) => {
  setPokemon(emptyPokemon)
}

export const cleanDetail = () => emptyPokemon
