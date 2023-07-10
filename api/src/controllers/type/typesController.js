// Importing controllers
const { getTypesData, getTypeData } = require('./handlers/typesHandler')

const getTypes = async (req, res) => {
  try {
    res.status(200).json(await getTypesData())
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getType = async (req, res) => {
  const { id } = req.params
  try {
    res.status(200).json(await getTypeData(id))
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getTypes, getType }
