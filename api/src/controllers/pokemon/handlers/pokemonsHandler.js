const axios = require('axios')
const { URL } = process.env
const { Pokemon, Type } = require('../../../db')

const getPokemonDetails = async (pokemonURL) => {
  try {
    const { data } = await axios.get(pokemonURL)

    const { id, name, sprites, stats, height, weight } = data
    const { front_default: image } = sprites.other['home']
    const { base_stat: hp } = stats[0]
    const { base_stat: attack } = stats[1]
    const { base_stat: defense } = stats[2]
    const { base_stat: speed } = stats[5]

    return { id, name, image, hp, attack, defense, speed, height, weight }
  } catch (error) {
    throw new Error(`Failed to fetch pokemon details. ${error.message}`)
  }
}

const getPokemonsFromAPI = async () => {
  try {
    const { data } = await axios.get(`${URL}/pokemon`)

    const pokemons = await Promise.all(
      data.results.map((pokemon) => getPokemonDetails(pokemon.url))
    )

    return pokemons
  } catch (error) {
    throw new Error(`Failed to fetch pokemons from api. ${error.message}`)
  }
}

const getPokemonsFromDB = async () => {
  try {
    const pokemons = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ['name']
      }
    })

    return pokemons
  } catch (error) {
    throw new Error(`Failed to fetch pokemons from db. ${error.message}`)
  }
}

const getPokemonsData = async () => {
  try {
    const apiData = await getPokemonsFromAPI()
    const dbData = await getPokemonsFromDB()
    const pokemons = apiData.concat(dbData)

    return pokemons
  } catch (error) {
    throw new Error(`Failed to fetch pokemons data. ${error.message}`)
  }
}

const getPokemonByName = async (name) => {
  try {
    const dbPokemon = await Pokemon.findOne({
      where: { name: name },
      include: [
        {
          model: Type,
          attributes: ['name']
        }
      ]
    })
    if (dbPokemon) return dbPokemon

    const pokemonURL = `${URL}/pokemon/${name.toLowerCase()}`
    const pokemon = await getPokemonDetails(pokemonURL)

    return pokemon
  } catch (error) {
    throw new Error(`Pokemon not found. ${error.message}`)
  }
}

const getPokemonByID = async (id) => {
  try {
    if (isNaN(id)) {
      const dbPokemon = await Pokemon.findByPk(id, {
        include: [
          {
            model: Type,
            attributes: ['name']
          }
        ]
      })
      if (dbPokemon) return dbPokemon
    }

    const pokemonURL = `${URL}/pokemon/${id}`
    const pokemon = await getPokemonDetails(pokemonURL)

    return pokemon
  } catch (error) {
    throw new Error(`Pokemon with id ${id} not found. ${error.message}`)
  }
}

module.exports = { getPokemonsData, getPokemonByName, getPokemonByID }
