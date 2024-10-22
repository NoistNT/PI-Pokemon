import { useEffect } from 'react'

import Cards from '@/components/Cards/Cards'
import Menu from '@/components/Menu/Menu'
import Paginate from '@/components/Paginate/Paginate'
import { customError } from '@/helpers/helpers'
import { getPokemons } from '@/redux/actions/pokemonAsyncActions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { POKEMONS_PER_PAGE } from '@/utils/constants'

export default function Home() {
  const dispatch = useAppDispatch()
  const { pokemons, error, currentPage } = useAppSelector(
    ({ pokemons }) => pokemons
  )

  const totalPages = Math.ceil(pokemons.length / POKEMONS_PER_PAGE)

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  const indexOfLastPokemon = currentPage * POKEMONS_PER_PAGE
  const indexOfFirstPokemon = indexOfLastPokemon - POKEMONS_PER_PAGE
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  )

  if (error) {
    customError(error, 'An error occurred while fetching the pokemons')
  }

  return (
    <>
      <Menu />
      <Paginate totalPages={totalPages} />
      <Cards pokemons={currentPokemons} />
      <Paginate totalPages={totalPages} />
    </>
  )
}
