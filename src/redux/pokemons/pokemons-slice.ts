import type {
  PokemonInitialState,
  PokemonTypes,
  SortOptions
} from '@/types/types'

import { createSlice } from '@reduxjs/toolkit'

import { sortPokemons } from '@/helpers/helpers'
import {
  getPokemonByName,
  getPokemons,
  getTypes,
  removePokemon
} from '@/redux/actions/pokemonAsyncActions'

const initialState: PokemonInitialState = {
  allPokemons: [],
  pokemons: [],
  pokemon: {
    id: 0,
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
  },
  types: [],
  isLoading: true,
  error: null,
  currentPage: 1
}

export const pokemonsReducer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    removePokemonLocal(state, { payload }: { payload: string }) {
      state.pokemons = state.pokemons.filter(({ id }) => id !== payload)
      state.allPokemons = state.pokemons
    },
    setCurrentPage(state, { payload }: { payload: number }) {
      state.currentPage = payload
    },
    setSource(state, { payload }: { payload: string }) {
      switch (payload) {
        case 'db':
          state.pokemons = state.allPokemons.filter(
            ({ userCreated }) => userCreated
          )
          break
        case 'api':
          state.pokemons = state.allPokemons.filter(
            ({ userCreated }) => !userCreated
          )
          break
        default:
          state.pokemons = state.allPokemons
          break
      }
    },
    setSort(state, { payload }: { payload: SortOptions }) {
      state.pokemons = sortPokemons(state.pokemons, payload)
    },
    setType(state, { payload }: { payload: PokemonTypes }) {
      state.pokemons =
        payload === 'all'
          ? state.allPokemons
          : state.allPokemons.filter(({ type }) =>
              type.map(({ name }) => name).includes(payload)
            )
    },
    resetFilters(state) {
      state.pokemons = sortPokemons(state.allPokemons, 'asc')
    }
  },
  extraReducers(builder) {
    builder
      // GET POKEMONS
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemons.fulfilled, (state, { payload }) => {
        const sorted = sortPokemons(payload, 'asc')

        state.isLoading = false
        state.allPokemons = sorted
        state.pokemons = sorted
        state.error = null
      })
      .addCase(getPokemons.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error
      })

      // GET POKEMON BY NAME
      .addCase(getPokemonByName.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonByName.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.pokemons = payload
        state.pokemon = payload[0]
        state.error = null
      })
      .addCase(getPokemonByName.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error
      })

      // GET TYPES
      .addCase(getTypes.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getTypes.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.types = payload
        state.error = null
      })
      .addCase(getTypes.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error
      })

      // REMOVE POKEMON
      .addCase(removePokemon.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(removePokemon.fulfilled, (state) => {
        state.isLoading = false
        state.error = null
      })
      .addCase(removePokemon.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error
      })
  }
})

export default pokemonsReducer.reducer
