import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/actions/pokemonAsyncActions'
import { Message } from '../../components/StyledComponents/StyledMessage'
import Cards from '../../components/Cards/Cards'
import Loader from '../../components/Loader/Loader'
import Menu from '../../components/Menu/Menu'
import Paginate from '../../components/Paginate/Paginate'

export default function Home() {
  const dispatch = useDispatch()

  const [sort, setSort] = useState('')
  const [filters, setFilters] = useState('')
  const { pokemons, isLoading, error } = useSelector(
    (state) => state.pokemonReducer
  )

  const [currentPage, setCurrentPage] = useState(1)
  const pokemonsPerPage = 8
  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

  useEffect(() => {
    const shouldGetPokemons = !pokemons.length && !filters && !sort && !error
    if (shouldGetPokemons) {
      dispatch(getPokemons())
    }
  }, [dispatch, pokemons, filters, sort, error])

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page)
  }, [])

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
        <Menu
          setSort={setSort}
          setFilters={setFilters}
          setCurrentPage={setCurrentPage}
        />
        <Message>{error}</Message>
      </>
    )
  }

  return (
    <>
      <Menu
        setSort={setSort}
        setFilters={setFilters}
        setCurrentPage={setCurrentPage}
      />
      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Cards pokemons={currentPokemons} />
      <Paginate
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  )
}
