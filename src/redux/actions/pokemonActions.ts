import { createAction } from '@reduxjs/toolkit'

export const removePokemonLocal = createAction(
  'pokemons/removePokemonLocal',
  (id: string) => ({ payload: id })
)

export const setCurrentPage = createAction(
  'pokemons/setCurrentPage',
  (page: number) => ({ payload: page })
)

export const setSource = createAction(
  'pokemons/setSource',
  (source: string) => ({ payload: source })
)

export const setSort = createAction('pokemons/setSort', (sort: string) => ({
  payload: sort
}))
