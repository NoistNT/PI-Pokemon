import { combineReducers } from '@reduxjs/toolkit'

import pokemonsReducer from '@/redux/pokemons/pokemons-slice'
import typesReducer from '@/redux/pokemons/types-slice'

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  types: typesReducer
})
