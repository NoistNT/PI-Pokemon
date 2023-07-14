import {
  GET_POKEMONS_BY_TYPE,
  SORT_POKEMONS,
  SET_SORT,
  SET_FILTERS,
  CLEAN_DETAIL,
  RESET_FILTERS
} from '../constants/pokemonConstants'

// Filter pokemons from redux state by type name
export const getPokemonsByType = (type) => {
  return { type: GET_POKEMONS_BY_TYPE, payload: type }
}

export const getPokemonsSorted = (sortOption) => {
  return { type: SORT_POKEMONS, payload: sortOption }
}

// Update setSort and setFilters in order to fix search bug
// Currently they're not being used
export const setSort = () => {
  return { type: SET_SORT }
}

export const setFilters = () => {
  return { type: SET_FILTERS }
}

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL }
}

export const resetFilters = () => {
  return { type: RESET_FILTERS }
}
