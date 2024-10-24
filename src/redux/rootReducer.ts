import { combineReducers } from '@reduxjs/toolkit'

import pokemonsReducer from '@/redux/pokemons/pokemons-slice'

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer
})
