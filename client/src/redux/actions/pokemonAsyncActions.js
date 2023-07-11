import axios from 'axios'
import { URL } from '../../env'
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
  GET_POKEMONS_BY_TYPE_PENDING,
  GET_POKEMONS_BY_TYPE_FULFILLED,
  GET_POKEMONS_BY_TYPE_REJECTED,
  GET_POKEMONS_BY_SOURCE_PENDING,
  GET_POKEMONS_BY_SOURCE_FULFILLED,
  GET_POKEMONS_BY_SOURCE_REJECTED,
  GET_TYPES
} from '../constants/pokemonConstants'

export const getPokemons = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMONS_PENDING })
    try {
      const { data } = await axios.get(`${URL}/pokemon`)
      dispatch({ type: GET_POKEMONS_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: GET_POKEMONS_REJECTED,
        payload: 'Failed to fetch pokemons. Please try again later.'
      })
    }
  }
}

export const getPokemonById = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMON_BY_ID_PENDING })

    try {
      const { data } = await axios.get(`${URL}/pokemon/${id}`)
      dispatch({ type: GET_POKEMON_BY_ID_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: GET_POKEMON_BY_ID_REJECTED,
        payload: 'Failed to fetch pokemons by id. Please try again later.'
      })
    }
  }
}

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMON_BY_NAME_PENDING })
    try {
      const { data } = await axios.get(`${URL}/pokemon?name=${name}`)
      return dispatch({ type: GET_POKEMON_BY_NAME_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: GET_POKEMON_BY_NAME_REJECTED,
        payload: 'Failed to fetch pokemons by name. Please try again later.'
      })
    }
  }
}

// Switch value in Menu -> Types dropdown from name to id
// in order to be able to filter pokemons from API by type id
export const getPokemonsByType2 = (type) => {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMONS_BY_TYPE_PENDING })
    try {
      const { data } = await axios.get(`${URL}/type/${type}`)
      dispatch({ type: GET_POKEMONS_BY_TYPE_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: GET_POKEMONS_BY_TYPE_REJECTED,
        payload: 'Failed to fetch pokemons by type. Please try again later.'
      })
    }
  }
}

// Switch value in Menu -> Types dropdown from id to name
// in order to be able to filter pokemons from the state by type name
export const getPokemonsByType = (type) => {
  return { type: GET_POKEMONS_BY_TYPE, payload: type }
}

export const getPokemonsBySource = () => {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMONS_BY_SOURCE_PENDING })
    try {
      const { data } = await axios.get(`${URL}/source`)
      dispatch({ type: GET_POKEMONS_BY_SOURCE_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: GET_POKEMONS_BY_SOURCE_REJECTED,
        payload: 'Failed to fetch pokemons by source. Please try again later.'
      })
    }
  }
}

export const getTypes = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}/type`)
    dispatch({ type: GET_TYPES, payload: data })
  }
}
