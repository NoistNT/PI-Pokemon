import { capitalize } from './helpers'

const HP = 'hp'
const NAME = 'name'
const ATTACK = 'attack'
const DEFENSE = 'defense'
const SPEED = 'speed'
const HEIGHT = 'height'
const WEIGHT = 'weight'
const IMAGE = 'image'
const TYPE = 'type'

export const validatePokemon = (input, value) => {
  const errors = {}

  switch (input) {
    case NAME:
      if (!value) {
        errors.name = 'Name is required'
      } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(value)) {
        errors.name = 'Name can only contain letters'
      } else if (value.length > 20) {
        errors.name = 'Name must be less than 20 characters'
      }
      break

    case HP:
    case ATTACK:
    case DEFENSE:
    case SPEED:
    case HEIGHT:
    case WEIGHT:
      if (!value) {
        errors[input.toLowerCase()] = `${capitalize(input)} is required`
      } else if (isNaN(value)) {
        errors[input.toLowerCase()] = `${capitalize(input)} must be a number`
      } else if (value < 0) {
        errors[input.toLowerCase()] = `${capitalize(
          input
        )} must be a positive number`
      }
      break

    case IMAGE:
      if (!value) {
        errors.image = 'If no image is provided, the default image will be used'
      } else if (
        !/^https?:\/\/[\w\\-]+(\.[\w\\-]+)+(?:[/#?][\w\-./?=&%]*)?(?:\.(?:jpg|jpeg|png|gif|bmp|svg))$/.test(
          value
        )
      ) {
        errors.image = 'Invalid image URL'
      }
      break

    case TYPE:
      if (value.length === 0) {
        errors.type = 'Type is required'
      }
      break

    default:
      break
  }

  return errors
}
