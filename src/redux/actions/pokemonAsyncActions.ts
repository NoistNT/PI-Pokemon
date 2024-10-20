import type { Pokemon, Types } from '@/types/types'

import { createAsyncThunk } from '@reduxjs/toolkit'

const URL = import.meta.env.VITE_API_URL as string

export const getPokemons = createAsyncThunk(
  'pokemons/getPokemons',
  async () => {
    return await fetch(`${URL}/pokemon`).then(
      (res) => res.json() as Promise<Pokemon[]>
    )
  }
)

export const getPokemonByName = createAsyncThunk(
  'pokemons/getPokemonByName',
  async (name: string) => {
    return await fetch(`${URL}/pokemon/name/${name}`).then(
      (res) => res.json() as Promise<Pokemon[]>
    )
  }
)

export const getTypes = createAsyncThunk('pokemons/getTypes', async () => {
  return await fetch(`${URL}/type`).then(
    (res) => res.json() as Promise<Types[]>
  )
})

export const removePokemon = createAsyncThunk(
  'pokemons/removePokemon',
  async (id: string) => {
    return await fetch(`${URL}/pokemon/${id}`, {
      method: 'DELETE'
    }).then((res) => res.json() as Promise<boolean>)
  }
)
