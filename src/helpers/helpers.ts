import type { Pokemon, Types } from '@/types/types'

export const capitalize = (name: string) => {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : ''
}

export const types = (types: Types[]) => {
  return types.map(({ name }) => `${capitalize(name)} `)
}

export const sortPokemons = <T extends keyof typeof sortFuncMap>(
  pokemons: Pokemon[],
  sortOption: T
) => {
  const sortFuncMap = {
    asc: (a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name),
    desc: (a: Pokemon, b: Pokemon) => b.name.localeCompare(a.name),
    higherAtk: (a: Pokemon, b: Pokemon) => b.attack - a.attack,
    lowerAtk: (a: Pokemon, b: Pokemon) => a.attack - b.attack,
    higherDef: (a: Pokemon, b: Pokemon) => b.defense - a.defense,
    lowerDef: (a: Pokemon, b: Pokemon) => a.defense - b.defense,
    higherHp: (a: Pokemon, b: Pokemon) => b.hp - a.hp,
    lowerHp: (a: Pokemon, b: Pokemon) => a.hp - b.hp,
    higherSpd: (a: Pokemon, b: Pokemon) => b.speed - a.speed,
    lowerSpd: (a: Pokemon, b: Pokemon) => a.speed - b.speed
  }

  const sortFunc = sortFuncMap[sortOption] || (() => 0)

  return [...pokemons].sort(sortFunc)
}
