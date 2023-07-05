const { Pokemon, Type } = require('../../db')

const createPokemon = async (pokemon) => {
  try {
    const pokemonExists = await Pokemon.findOne({
      where: {
        name: pokemon.name
      }
    })
    if (pokemonExists) throw new Error(`${pokemon.name} already exists`)

    await Pokemon.create({
      name: pokemon.name,
      image: pokemon.image,
      hp: pokemon.hp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      height: pokemon.height,
      weight: pokemon.weight
    })

    return `New Pokemon ${pokemon.name} created successfully`
  } catch (error) {
    console.log(error)
    throw new Error(`Could not create pokemon. ${error}`)
  }
}

module.exports = createPokemon
