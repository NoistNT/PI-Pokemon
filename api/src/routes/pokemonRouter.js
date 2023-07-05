const { Router } = require('express')

// Importing controllers
const {
  getPokemons,
  getPokemon,
  postPokemon
} = require('../controllers/pokemon/pokemonsController')

const router = Router()

// Router configuration
router.get('/', getPokemons).get('/:id', getPokemon)
router.post('/', postPokemon)

module.exports = router
