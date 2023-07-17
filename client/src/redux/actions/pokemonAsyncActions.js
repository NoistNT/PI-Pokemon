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
  GET_POKEMONS_BY_TYPE_PENDING,
  GET_POKEMONS_BY_TYPE_FULFILLED,
  GET_POKEMONS_BY_TYPE_REJECTED,
  POST_POKEMON_PENDING,
  POST_POKEMON_FULFILLED,
  POST_POKEMON_REJECTED,
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
        payload: 'Failed to fetch pokémons. Please try again later.'
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
        payload: 'Failed to fetch pokémons by id. Please try again later.'
      })
    }
  }
}

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    dispatch({ type: GET_POKEMON_BY_NAME_PENDING })
    try {
      const { data } = await axios.get(`${URL}/pokemon?name=${name}`)
      dispatch({ type: GET_POKEMON_BY_NAME_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: GET_POKEMON_BY_NAME_REJECTED,
        payload: 'Pokémon not found'
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
        payload: 'Failed to fetch pokémons by type. Please try again later.'
      })
    }
  }
}

export const postPokemon = (pokemon) => {
  return async (dispatch) => {
    dispatch({ type: POST_POKEMON_PENDING })
    try {
      const { data } = await axios.post(`${URL}/pokemon`, pokemon)
      dispatch({ type: POST_POKEMON_FULFILLED, payload: data })
      // Show a message to the user that the pokemon was created
    } catch (error) {
      dispatch({
        type: POST_POKEMON_REJECTED,
        payload: 'Failed to create pokemon. Please try again later.'
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
