import { useEffect } from 'react';

import { Cards } from '@/components/Cards/Cards';
import { Menu } from '@/components/Menu/Menu';
import { Paginate } from '@/components/Paginate/Paginate';
import { getPokemons } from '@/redux/actions/pokemon-async-actions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { POKEMONS_PER_PAGE } from '@/utils/config';

export function Home() {
  const dispatch = useAppDispatch();
  const { pokemons, currentPage } = useAppSelector(({ pokemons }) => pokemons);

  useEffect(() => {
    if (!pokemons.length) dispatch(getPokemons());
  }, [dispatch, pokemons]);

  const totalPages = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);
  const indexOfLastPokemon = currentPage * POKEMONS_PER_PAGE;
  const indexOfFirstPokemon = indexOfLastPokemon - POKEMONS_PER_PAGE;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <>
      <Menu />
      <Paginate totalPages={totalPages} />
      <Cards pokemons={currentPokemons} />
      <Paginate totalPages={totalPages} />
    </>
  );
}
