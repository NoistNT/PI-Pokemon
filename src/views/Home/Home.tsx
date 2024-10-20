import { useEffect } from 'react'

import Cards from '@/components/Cards/Cards'
import Loader from '@/components/Loader/Loader'
import Menu from '@/components/Menu/Menu'
import Paginate from '@/components/Paginate/Paginate'
import { Message } from '@/components/StyledComponents/StyledMessage'
import { getPokemons } from '@/redux/actions/pokemonAsyncActions'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Home() {
  const dispatch = useAppDispatch()
  const { pokemons, isLoading, error, currentPage } = useAppSelector(
    ({ pokemons }) => pokemons
  )

  const POKEMONS_PER_PAGE = import.meta.env.VITE_POKEMONS_PER_PAGE as number

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

  if (isLoading) return <Loader />
  if (error)
    return (
      <>
        <Menu />
        <Message>{error.message}</Message>
      </>
    )

  return (
    <>
      <Menu />
      <Paginate totalPages={totalPages} />
      {!currentPokemons.length ? (
        <Message>No pokemons found.</Message>
      ) : (
        <Cards pokemons={currentPokemons} />
      )}
      <Paginate totalPages={totalPages} />
    </>
  )
}
