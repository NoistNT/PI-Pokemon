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
  GET_POKEMONS_BY_TYPE,
  GET_POKEMONS_BY_SOURCE,
  POST_POKEMON_PENDING,
  POST_POKEMON_FULFILLED,
  POST_POKEMON_REJECTED,
  GET_TYPES,
  SET_CURRENT_PAGE,
  SORT_POKEMONS,
  CLEAN_DETAIL,
  RESET_FILTERS
} from '../constants/pokemonConstants'

const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemon: {},
  types: [],
  isLoading: true,
  error: null,
  sort: 'asc',
  filter: '',
  source: '',
  currentPage: 1
}

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMONS_PENDING:
    case GET_POKEMON_BY_ID_PENDING:
    case GET_POKEMON_BY_NAME_PENDING:
    case POST_POKEMON_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case GET_POKEMONS_REJECTED:
    case GET_POKEMON_BY_ID_REJECTED:
    case GET_POKEMON_BY_NAME_REJECTED:
    case POST_POKEMON_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload
      }

    case GET_POKEMONS_FULFILLED:
      return {
        ...state,
        allPokemons: payload,
        pokemons: payload,
        isLoading: false,
        error: null
      }

    case GET_POKEMON_BY_ID_FULFILLED:
      return {
        ...state,
        pokemon: payload,
        isLoading: false,
        error: null
      }

    case GET_POKEMON_BY_NAME_FULFILLED:
      return {
        ...state,
        pokemons: payload,
        isLoading: false,
        error: null
      }

    case GET_POKEMONS_BY_TYPE:
      const pokemonsFoundByType = [...state.allPokemons].filter((pokemon) =>
        pokemon.type.includes(payload)
      )

      if (!pokemonsFoundByType.length) {
        return {
          ...state,
          isLoading: false,
          error: `${capitalize(payload)} pokémons not found`,
          filter: payload
        }
      }

      return {
        ...state,
        pokemons: pokemonsFoundByType,
        isLoading: false,
        error: null,
        filter: payload
      }

    case POST_POKEMON_FULFILLED:
      return {
        ...state,
        isLoading: false,
        error: null
      }

    case GET_TYPES:
      return {
        ...state,
        types: payload,
        isLoading: false
      }

    case SORT_POKEMONS:
      const sortedAllPokemons = sortPokemons(state.allPokemons, payload)
      const sortedPokemons = state.pokemons.length
        ? sortPokemons(state.pokemons, payload)
        : sortedAllPokemons

      return {
        ...state,
        allPokemons: sortedAllPokemons,
        pokemons: sortedPokemons,
        error: null,
        sort: payload
      }

    case GET_POKEMONS_BY_SOURCE:
      let filterCondition
      if (payload === 'database') {
        filterCondition = (pokemon) => isNaN(pokemon.id)
      } else if (payload === 'api') {
        filterCondition = (pokemon) => !isNaN(pokemon.id)
      } else {
        filterCondition = () => true
      }

      const filteredPokemons = state.allPokemons.filter(filterCondition)

      return {
        ...state,
        pokemons: filteredPokemons,
        isLoading: false,
        error: null,
        source: payload
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
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
        pokemons: sortPokemons(state.allPokemons, 'asc'),
        error: null
      }

    default:
      return state
  }
}
