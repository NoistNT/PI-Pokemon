const { Router } = require('express')

// Importing controllers
const { getTypes, getType } = require('../controllers/type/typesController')

const typeRouter = Router()

// Router configuration
typeRouter.get('/', getTypes)
typeRouter.get('/:id', getType)

module.exports = typeRouter
