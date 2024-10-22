import type { FilterPokemons, Pokemon, SortOptions, Types } from '@/types/types'

import { toast } from 'sonner'

export const showToast = (type: 'success' | 'error', message: string) => {
  toast[type](message, { position: 'bottom-right' })
}

export const customError = (error: unknown, message: string) => {
  const errMessage =
    (error as Error).message || message || 'Something went wrong'

  showToast('error', errMessage)
}

export const capitalize = (name: string) => {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : ''
}

export const sanitize = (name: string) => {
  return name.replace(/\s/g, '').toLowerCase()
}

export const types = (types: Types[]) => {
  return types.map(({ name }) => `${capitalize(name)} `)
}

export const sortPokemons = (pokemons: Pokemon[], sortOption: SortOptions) => {
  const sortFuncMap: Record<SortOptions, (a: Pokemon, b: Pokemon) => number> = {
    asc: (a, b) => a.name.localeCompare(b.name),
    desc: (a, b) => b.name.localeCompare(a.name),
    higherAtk: (a, b) => b.attack - a.attack,
    lowerAtk: (a, b) => a.attack - b.attack,
    higherDef: (a, b) => b.defense - a.defense,
    lowerDef: (a, b) => a.defense - b.defense,
    higherHp: (a, b) => b.hp - a.hp,
    lowerHp: (a, b) => a.hp - b.hp,
    higherSpd: (a, b) => b.speed - a.speed,
    lowerSpd: (a, b) => a.speed - b.speed
  }

  const sortFunc = sortFuncMap[sortOption] || (() => 0)

  return [...pokemons].sort(sortFunc)
}

export const filterPokemons = (
  pokemons: Pokemon[],
  { type, source, sortOption }: FilterPokemons
) => {
  let filtered =
    source === 'db'
      ? pokemons.filter(({ userCreated }) => userCreated)
      : source === 'api'
        ? pokemons.filter(({ userCreated }) => !userCreated)
        : pokemons

  filtered =
    type === 'all'
      ? filtered
      : filtered.filter(({ type: PokemonTypes }) =>
          PokemonTypes.some(({ name }) => name === type)
        )

  if (!filtered.length) {
    const err = new Error(`No ${capitalize(type)} pokemons found`)

    customError(err, err.message)
    throw err
  }

  return sortPokemons(filtered, sortOption)
}

export const resetPokemon = (
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
) => {
  setPokemon({
    id: '',
    name: '',
    image: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: [],
    userCreated: false
  })
}
