import type { Pokemon, SortOptions, Types } from '@/types/types'

export const capitalize = (name: string) => {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : ''
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
