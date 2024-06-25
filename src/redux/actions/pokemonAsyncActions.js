import axios from 'axios'

import {
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
  REMOVE_POKEMON_BY_ID_PENDING,
  REMOVE_POKEMON_BY_ID_REJECTED
} from '@/redux/constants/pokemonConstants'

const URL = import.meta.env.VITE_URL

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
      const { data } = await axios.get(`${URL}/pokemon/name/${name}`)

      dispatch({ type: GET_POKEMON_BY_NAME_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: GET_POKEMON_BY_NAME_REJECTED,
        payload: 'Pokémon not found'
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
    } catch (error) {
      dispatch({
        type: POST_POKEMON_REJECTED,
        payload: 'Failed to create pokemon. Please try again later.'
      })
    }
  }
}

export const removePokemonById = (id) => {
  return async (dispatch) => {
    dispatch({ type: REMOVE_POKEMON_BY_ID_PENDING })
    try {
      const data = await axios.delete(`${URL}/pokemon/${id}`)

      dispatch({ type: REMOVE_POKEMON_BY_ID_FULFILLED, payload: data })
    } catch (error) {
      dispatch({
        type: REMOVE_POKEMON_BY_ID_REJECTED,
        payload: 'Failed to remove pokemon. Please try again later.'
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
