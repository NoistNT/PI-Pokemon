const { Router } = require('express')

// Importing Routers
const { getTypesData } = require('../controllers/type/handlers/typesHandler')
const pokemonRouter = require('./pokemonRouter')
const typeRouter = require('./typeRouter')

// Loading database with Types data
const loadDB = async () => await getTypesData()
loadDB()

const router = Router()

// Setting Routers
router.use('/pokemon', pokemonRouter)
router.use('/type', typeRouter)

module.exports = router
