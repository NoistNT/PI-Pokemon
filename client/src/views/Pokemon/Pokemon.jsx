import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/actions/actions'
import Cards from '../../components/Cards/Cards'
import Loader from '../../components/Loader/Loader'
import Menu from '../../components/Menu/Menu'

export default function Home() {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons)
  const isLoading = useSelector((state) => state.isLoading)
  const isSorted = useSelector((state) => state.isSorted)

  useEffect(() => {
    if (!isSorted) dispatch(getPokemons())
  }, [dispatch, isSorted])

  if (isLoading && !isSorted) {
    return <Loader />
  }

  return (
    <div>
      <Menu />
      <Cards pokemons={pokemons} />
    </div>
  )
}
