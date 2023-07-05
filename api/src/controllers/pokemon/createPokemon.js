const { Pokemon, Type } = require('../../db')

const createPokemon = async (pokemon) => {
  try {
    const pokemonExists = await Pokemon.findOne({
      where: { name: pokemon.name }
    })

    if (pokemonExists) {
      throw new Error(`${pokemon.name} already exists`)
    }

    if (
      !pokemon.name ||
      !pokemon.image ||
      !pokemon.hp ||
      !pokemon.attack ||
      !pokemon.defense ||
      !pokemon.speed ||
      !pokemon.height ||
      !pokemon.weight ||
      !pokemon.type
    ) {
      throw new Error(
        'Invalid pokemon data. Please provide all required properties'
      )
    }

    const newPokemon = await Pokemon.create(pokemon)

    const types = await Type.findAll({ where: { name: pokemon.type } })

    await newPokemon.addType(types)

    return `New Pokemon ${pokemon.name} created successfully`
  } catch (error) {
    throw new Error(`Could not create pokemon. ${error}`)
  }
}

module.exports = createPokemon
