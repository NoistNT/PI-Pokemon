export const capitalize = (name) => {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : ''
}

export const types = (types) => {
  return types?.map((type) => `${capitalize(type)} `)
}

export const sortPokemons = (pokemons, sortOption) => {
  const sortFuncMap = {
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

export const resetPokemon = (setPokemon) => {
  setPokemon({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    image: '',
    type: []
  })
}
