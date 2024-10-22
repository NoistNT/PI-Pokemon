const API_URL = import.meta.env.VITE_API_URL as string
const POKEMONS_PER_PAGE = import.meta.env.VITE_POKEMONS_PER_PAGE as number

const envError = (key: string) => {
  throw new Error(`${key} is not defined`)
}

if (!API_URL) {
  envError('VITE_API_URL')
}

if (!POKEMONS_PER_PAGE) {
  envError('VITE_POKEMONS_PER_PAGE')
}

export { API_URL, POKEMONS_PER_PAGE }
