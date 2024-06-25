import {
  CLEAN_DETAIL,
  GET_POKEMONS_BY_SOURCE,
  GET_POKEMONS_BY_TYPE,
  REMOVE_POKEMON_BY_ID_LOCAL,
  RESET_FILTERS,
  SET_CURRENT_PAGE,
  SORT_POKEMONS
} from '@/redux/constants/pokemonConstants'

export const getPokemonsByType = (type) => {
  return { type: GET_POKEMONS_BY_TYPE, payload: type }
}

export const getPokemonsBySource = (source) => {
  return { type: GET_POKEMONS_BY_SOURCE, payload: source }
}

export const getPokemonsSorted = (sortOption) => {
  return { type: SORT_POKEMONS, payload: sortOption }
}

export const removePokemonByIdLocal = (id) => {
  return { type: REMOVE_POKEMON_BY_ID_LOCAL, payload: id }
}

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page }
}

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL }
}

export const resetFilters = () => {
  return { type: RESET_FILTERS }
}
