import type { SerializedError } from '@reduxjs/toolkit'

export interface Types {
  _id: string
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

export interface PokemonTypesProps {
  type: PokemonTypes
}

export const typeColor = {
  normal: '#7e7e7e',
  fighting: '#f08030',
  water: '#2855be',
  electric: '#c5ab19',
  grass: '#347a10',
  ice: '#98d8d8',
  fire: '#8d1812',
  poison: '#8d15ac',
  ground: '#705817',
  flying: '#215872',
  psychic: '#f85888',
  bug: '#839710',
  rock: '#524f49',
  ghost: '#4a3866',
  dragon: '#b45312',
  dark: '#161616',
  steel: '#5f5f75',
  fairy: '#a85668',
  unknown: '#ac2b5c',
  shadow: '#181616'
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

export type ErrorTypes =
  | 'name'
  | 'hp'
  | 'attack'
  | 'defense'
  | 'speed'
  | 'height'
  | 'weight'
  | 'image'
  | 'type'
