import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/actions/pokemonAsyncActions'
import { Message } from '../../components/StyledComponents/StyledMessage'
import Cards from '../../components/Cards/Cards'
import Loader from '../../components/Loader/Loader'
import Menu from '../../components/Menu/Menu'
import Paginate from '../../components/Paginate/Paginate'

export default function Home() {
  const dispatch = useDispatch()

  const { pokemons, isLoading, error, filter, currentPage } = useSelector(
    (state) => state.pokemonReducer
  )

  const pokemonsPerPage = 8
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

  useEffect(() => {
    const shouldGetPokemons = !pokemons.length && !filter && !error
    if (shouldGetPokemons) {
      dispatch(getPokemons())
    }
  }, [dispatch, pokemons, filter, error])

  const indexOfLastPokemon = currentPage * pokemonsPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  )

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return (
      <>
        <Menu />
        <Message>{error}</Message>
      </>
    )
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
