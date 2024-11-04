import { createAction } from '@reduxjs/toolkit'

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

export const setType = createAction('pokemons/setType', (type: string) => ({
  payload: type
}))

export const cleanDetail = createAction('pokemons/cleanDetail')

export const resetFilters = createAction('pokemons/resetFilters')
