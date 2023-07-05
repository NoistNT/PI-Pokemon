const { Router } = require('express')

// Importing controllers
const { getTypes } = require('../controllers/type/typesController')

const router = Router()

// Router configuration
router.get('/', getTypes)

module.exports = router
