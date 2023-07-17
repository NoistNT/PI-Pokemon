/* eslint-disable no-case-declarations */
import { sortPokemons, capitalize } from '../../helpers/helpers'
import {
  GET_POKEMONS_PENDING,
  GET_POKEMONS_FULFILLED,
  GET_POKEMONS_REJECTED,
  GET_POKEMON_BY_ID_PENDING,
  GET_POKEMON_BY_ID_FULFILLED,
  GET_POKEMON_BY_ID_REJECTED,
  GET_POKEMON_BY_NAME_PENDING,
  GET_POKEMON_BY_NAME_FULFILLED,
  GET_POKEMON_BY_NAME_REJECTED,
  GET_POKEMONS_BY_TYPE_PENDING,
  GET_POKEMONS_BY_TYPE_FULFILLED,
  GET_POKEMONS_BY_TYPE_REJECTED,
  GET_POKEMONS_BY_TYPE,
  GET_POKEMONS_BY_SOURCE,
  POST_POKEMON_PENDING,
  POST_POKEMON_FULFILLED,
  POST_POKEMON_REJECTED,
  GET_TYPES,
  SORT_POKEMONS,
  CLEAN_DETAIL,
  RESET_FILTERS
} from '../constants/pokemonConstants'

const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemon: {},
  unsortedPokemons: [],
  types: [],
  isLoading: true,
  error: null,
  success: false
}

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_POKEMONS_FULFILLED:
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload,
        unsortedPokemons: payload,
        isLoading: false,
        error: null
      }
    case GET_POKEMONS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case GET_POKEMON_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_POKEMON_BY_ID_FULFILLED:
      return {
        ...state,
        pokemon: payload,
        isLoading: false,
        error: null
      }
    case GET_POKEMON_BY_ID_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case GET_POKEMON_BY_NAME_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_POKEMON_BY_NAME_FULFILLED:
      return {
        ...state,
        pokemons: payload,
        isLoading: false,
        error: null
      }
    case GET_POKEMON_BY_NAME_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    // Filter pokemons where the given type by the payload is included
    // Use this to filter from the state
    case GET_POKEMONS_BY_TYPE:
      const pokemonsByType = [...state.allPokemons].filter((pokemon) =>
        pokemon.type.includes(payload)
      )

      if (!pokemonsByType.length) {
        return {
          ...state,
          pokemons: [],
          isLoading: false,
          error: `${capitalize(payload)} pokémons not found`
        }
      }

      return {
        ...state,
        pokemons: pokemonsByType,
        isLoading: false,
        error: null
      }
    case GET_POKEMONS_BY_TYPE_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    // Filter pokemons from server side
    case GET_POKEMONS_BY_TYPE_FULFILLED:
      return {
        ...state,
        pokemons: payload,
        isLoading: false,
        error: null
      }
    case GET_POKEMONS_BY_TYPE_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case GET_POKEMONS_BY_SOURCE:
      const isSourceFromDb = isNaN(payload)
      const filteredPokemons = state.allPokemons.filter((pokemon) =>
        isSourceFromDb ? isNaN(pokemon.id) : !isNaN(pokemon.id)
      )
      return {
        ...state,
        pokemons: filteredPokemons,
        isLoading: false,
        error: null
      }
    case POST_POKEMON_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case POST_POKEMON_FULFILLED:
      return {
        ...state,
        isLoading: false,
        error: null,
        success: true
      }
    case POST_POKEMON_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }
    case GET_TYPES:
      return {
        ...state,
        types: payload,
        isLoading: false
      }
    case SORT_POKEMONS:
      const allPokemonsSorted = sortPokemons(state.allPokemons, payload)
      const pokemonsSorted = sortPokemons(state.pokemons, payload)

      return {
        ...state,
        allPokemons: allPokemonsSorted,
        pokemons: pokemonsSorted,
        error: null
      }
    case CLEAN_DETAIL:
      return {
        ...state,
        pokemon: {},
        error: null
      }
    case RESET_FILTERS:
      return {
        ...state,
        pokemons: [...state.unsortedPokemons],
        error: null
      }

    default:
      return state
  }
}
