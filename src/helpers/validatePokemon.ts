import type { ErrorTypes } from '@/types/types'

import { capitalize, sanitize } from '@/helpers/helpers'

const HP = 'hp'
const NAME = 'name'
const ATTACK = 'attack'
const DEFENSE = 'defense'
const SPEED = 'speed'
const HEIGHT = 'height'
const WEIGHT = 'weight'
const IMAGE = 'image'
const TYPE = 'type'

export const validatePokemon = (
  typeName: string,
  typeValue: string | number
) => {
  const nameSanitized = sanitize(typeName) as ErrorTypes
  const typeValueSanitized = sanitize(String(typeValue))
  const typeValueStr = String(typeValueSanitized)
  const typeValueNum = Number(typeValue)
  const errors = {
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: '',
    type: ''
  }

  switch (typeName) {
    case NAME:
      if (!typeValue) {
        errors.name = 'Name is required'
      } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(typeValueStr)) {
        errors.name = 'Name can only contain letters'
      } else if (typeValueStr.length > 20) {
        errors.name = 'Name must be less than 20 characters'
      }
      break

    case HP:
    case ATTACK:
    case DEFENSE:
    case SPEED:
    case HEIGHT:
    case WEIGHT:
      if (!typeValueNum) {
        errors[nameSanitized] = `${capitalize(typeName)} is required`
      } else if (typeof typeValueNum !== 'number') {
        errors[nameSanitized] = `${capitalize(typeName)} must be a number`
      } else if (typeValueNum < 0) {
        errors[nameSanitized] =
          `${capitalize(typeName)} must be a positive number`
      }
      break
    case IMAGE:
      if (!typeValue) {
        errors.image = 'If no image is provided, the default image will be used'
      } else if (
        !/^https?:\/\/[\w\\-]+(\.[\w\\-]+)+(?:[/#?][\w\-./?=&%]*)?(?:\.(?:jpg|jpeg|png|gif|bmp|svg))$/.test(
          typeValueStr
        )
      ) {
        errors.image = 'Invalid image URL'
      }
      break
    case TYPE:
      if (!typeValueStr.length) {
        errors.type = 'Type is required'
      }
      break
    default:
      break
  }

  return errors
}
