import type { SerializedError } from '@reduxjs/toolkit'

export interface Types {
  id: number
  name: string
  url: string
}

export interface Pokemon {
  id: number | string
  name: string
  image: string
  hp: number
  attack: number
  defense: number
  speed: number
  height: number
  weight: number
  type: Types[]
  userCreated: boolean
}

export interface PokemonInitialState {
  allPokemons: Pokemon[]
  pokemons: Pokemon[]
  pokemon: Pokemon
  types: Types[]
  isLoading: boolean
  error: SerializedError | null
  currentPage: number
}

export type SortOptions =
  | 'asc'
  | 'desc'
  | 'higherAtk'
  | 'lowerAtk'
  | 'higherDef'
  | 'lowerDef'
  | 'higherHp'
  | 'lowerHp'
  | 'higherSpd'
  | 'lowerSpd'

export type PokemonTypes =
  | 'all'
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water'
  | 'shadow'
  | 'unknown'
