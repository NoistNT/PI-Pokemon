import type { SerializedError } from '@reduxjs/toolkit'

export interface Pokemon {
  id: number
  name: string
  image: string
  hp: number
  attack: number
  defense: number
  speed: number
  height: number
  weight: number
  type: { name: string }[]
}

export interface PokemonInitialState {
  allPokemons: Pokemon[]
  pokemons: Pokemon[]
  pokemon: Pokemon
  types: string[]
  isLoading: boolean
  error: SerializedError | null
  sort: string
  filter: string
  source: string
  currentPage: number
}
