const { Router } = require('express')

// Importing Routers
const pokemonRouter = require('./pokemonRouter')
const typeRouter = require('./typeRouter')

const router = Router()

// Setting Routers
router.use('/pokemon', pokemonRouter).use('/type', typeRouter)

module.exports = router
