import { combineReducers } from 'redux'
import { pokemonReducer } from './reducers/pokemonReducer'

const rootReducer = combineReducers({
  pokemonReducer
})

export default rootReducer
