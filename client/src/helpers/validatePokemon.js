export const validatePokemon = (pokemon) => {
  const errors = {}

  if (!pokemon.name) {
    errors.name = 'Name is required'
  } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(pokemon.name)) {
    errors.name = 'Name can only contain letters and spaces'
  }

  if (!pokemon.hp) {
    errors.hp = 'HP is required'
  } else if (isNaN(pokemon.hp)) {
    errors.hp = 'HP must be a number'
  } else if (pokemon.hp < 0) {
    errors.hp = 'HP must be a positive number'
  }

  if (!pokemon.attack) {
    errors.attack = 'Attack is required'
  } else if (isNaN(pokemon.attack)) {
    errors.attack = 'Attack must be a number'
  } else if (pokemon.attack < 0) {
    errors.attack = 'Attack must be a positive number'
  }

  if (!pokemon.defense) {
    errors.defense = 'Defense is required'
  } else if (isNaN(pokemon.defense)) {
    errors.defense = 'Defense must be a number'
  } else if (pokemon.defense < 0) {
    errors.defense = 'Defense must be a positive number'
  }

  if (!pokemon.speed) {
    errors.speed = 'Speed is required'
  } else if (isNaN(pokemon.speed)) {
    errors.speed = 'Speed must be a number'
  } else if (pokemon.speed < 0) {
    errors.speed = 'Speed must be a positive number'
  }

  if (!pokemon.height) {
    errors.height = 'Height is required'
  } else if (isNaN(pokemon.height)) {
    errors.height = 'Height must be a number'
  } else if (pokemon.height < 0) {
    errors.height = 'Height must be a positive number'
  }

  if (!pokemon.weight) {
    errors.weight = 'Weight is required'
  } else if (isNaN(pokemon.weight)) {
    errors.weight = 'Weight must be a number'
  } else if (pokemon.weight < 0) {
    errors.weight = 'Weight must be a positive number'
  }

  if (!pokemon.image) {
    errors.image = 'Image URL is required'
  } else if (
    !/^https?:\/\/[\w\\-]+(\.[\w\\-]+)+(?:[/#?][\w\-./?=&%]*)?$/.test(
      pokemon.image
    )
  ) {
    errors.image = 'Invalid image URL'
  }

  if (!pokemon.type || pokemon.type.length === 0) {
    errors.type = 'Type is required'
  }

  return errors
}
