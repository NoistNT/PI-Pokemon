import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../redux/actions/actions'
import Cards from '../../components/Cards/Cards'
import Loader from '../../components/Loader/Loader'

export default function Home() {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons)
  const isLoading = useSelector((state) => state.isLoading)

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  } else {
    return <Cards pokemons={pokemons} />
  }
}
