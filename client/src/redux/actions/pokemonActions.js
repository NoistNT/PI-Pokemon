import {
  SORT_POKEMONS,
  CLEAN_DETAIL,
  RESET_FILTERS
} from '../constants/pokemonConstants'

export const getSorted = (sortOption) => {
  return { type: SORT_POKEMONS, payload: sortOption }
}

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL }
}

export const resetFilters = () => {
  return { type: RESET_FILTERS }
}
