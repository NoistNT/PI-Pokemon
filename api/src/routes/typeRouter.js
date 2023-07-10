const { Router } = require('express')

// Importing controllers
const { getTypes, getType } = require('../controllers/type/typesController')

const router = Router()

// Router configuration
router.get('/', getTypes)
router.get('/:id', getType)

module.exports = router
