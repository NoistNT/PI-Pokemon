import { capitalize, sortPokemons } from '@/helpers/helpers'
import {
  CLEAN_DETAIL,
  GET_POKEMONS_BY_SOURCE,
  GET_POKEMONS_BY_TYPE,
  GET_POKEMONS_FULFILLED,
  GET_POKEMONS_PENDING,
  GET_POKEMONS_REJECTED,
  GET_POKEMON_BY_ID_FULFILLED,
  GET_POKEMON_BY_ID_PENDING,
  GET_POKEMON_BY_ID_REJECTED,
  GET_POKEMON_BY_NAME_FULFILLED,
  GET_POKEMON_BY_NAME_PENDING,
  GET_POKEMON_BY_NAME_REJECTED,
  GET_TYPES,
  POST_POKEMON_FULFILLED,
  POST_POKEMON_PENDING,
  POST_POKEMON_REJECTED,
  REMOVE_POKEMON_BY_ID_FULFILLED,
  REMOVE_POKEMON_BY_ID_LOCAL,
  REMOVE_POKEMON_BY_ID_PENDING,
  REMOVE_POKEMON_BY_ID_REJECTED,
  RESET_FILTERS,
  SET_CURRENT_PAGE,
  SORT_POKEMONS
} from '@/redux/constants/pokemonConstants'

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
    case REMOVE_POKEMON_BY_ID_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case GET_POKEMONS_REJECTED:
    case GET_POKEMON_BY_ID_REJECTED:
    case GET_POKEMON_BY_NAME_REJECTED:
    case POST_POKEMON_REJECTED:
    case REMOVE_POKEMON_BY_ID_REJECTED:
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
      if (payload === '') {
        return {
          ...state,
          pokemons: state.allPokemons,
          isLoading: false,
          error: null
        }
      }
      const pokemonsByType = state.allPokemons.filter((pokemon) =>
        pokemon.type?.some((type) => type.name === payload)
      )

      if (!pokemonsByType.length) {
        return {
          ...state,
          isLoading: false,
          error: `${capitalize(payload)} pokémons not found`,
          filter: payload
        }
      }

      return {
        ...state,
        pokemons: pokemonsByType,
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

      if (payload === 'db') {
        filterCondition = (pokemon) => pokemon.userCreated
      } else if (payload === 'api') {
        filterCondition = (pokemon) => !pokemon.userCreated
      } else {
        filterCondition = () => true
      }

      const filteredPokemons = state.allPokemons.filter(filterCondition)

      if (!filteredPokemons.length) {
        return {
          ...state,
          isLoading: false,
          error: `No pokémons created by users yet. Why don't you try creating one yourself?`,
          source: payload
        }
      }

      return {
        ...state,
        pokemons: filteredPokemons,
        isLoading: false,
        error: null,
        source: payload
      }

    case REMOVE_POKEMON_BY_ID_FULFILLED:
      return {
        ...state,
        isLoading: false,
        error: null
      }

    case REMOVE_POKEMON_BY_ID_LOCAL:
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon) => pokemon.id !== payload),
        isLoading: false,
        error: null
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
