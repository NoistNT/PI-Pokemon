const { Type } = require('../../../db')
const axios = require('axios')

const createType = async (url) => {
  const { data } = await axios.get(url)
  const newType = Type.create({ id: data.id, name: data.name })
  return newType
}
const getTypesData = async () => {
  const URL = process.env.URL

  try {
    const typesDB = await Type.findAll()

    if (typesDB.length) return typesDB

    const { data } = await axios.get(`${URL}/type`)

    const types = Promise.all(data.results.map((type) => createType(type.url)))

    return types
  } catch (error) {
    throw new Error(`Failed to fetch types from api. ${error.message}`)
  }
}

module.exports = { getTypesData }
