import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'sonner';

import { customError } from '@/helpers/helpers';
import { fetchWithErrorHandling } from '@/redux/hooks';
import type { Pokemon } from '@/types/types';
import { API_URL } from '@/utils/config';

export const postPokemon = createAsyncThunk('pokemons/postPokemon', async (pokemon: Pokemon) => {
  try {
    return toast.promise(
      fetchWithErrorHandling(`${API_URL}/pokemon`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pokemon),
      }) as Promise<Pokemon>,
      {
        loading: 'Creating pokémon...',
        success: 'Pokémon created successfully',
        error: 'An error occurred while creating the pokemon',
      }
    );
  } catch (error) {
    customError(error, 'An error occurred while creating the pokemon');
    throw error;
  }
});

export const getPokemons = createAsyncThunk('pokemons/getPokemons', async () => {
  try {
    return (await fetchWithErrorHandling(`${API_URL}/pokemon`)) as Promise<Pokemon[]>;
  } catch (error) {
    customError(error, 'An error occurred while fetching the pokemons');
    throw error;
  }
});

export const getPokemonById = createAsyncThunk('pokemons/getPokemonById', async (id: string) => {
  try {
    return (await fetchWithErrorHandling(`${API_URL}/pokemon/${id}`)) as Promise<Pokemon>;
  } catch (error) {
    customError(error, 'An error occurred while fetching the pokemon');
    throw error;
  }
});

export const getPokemonByName = createAsyncThunk(
  'pokemons/getPokemonByName',
  async (name: string) => {
    try {
      return (await fetchWithErrorHandling(`${API_URL}/pokemon/name/${name}`)) as Promise<
        Pokemon[]
      >;
    } catch (error) {
      customError(error, 'Pokemon not found');
      throw error;
    }
  }
);

export const removePokemon = createAsyncThunk(
  'pokemons/removePokemon',
  async (id: string, { rejectWithValue }) => {
    try {
      toast.promise(
        fetchWithErrorHandling(`${API_URL}/pokemon/${id}`, {
          method: 'DELETE',
        }),
        {
          loading: 'Deleting pokémon...',
          success: 'Pokémon deleted successfully',
          error: 'An error occurred while deleting the pokemon',
        }
      );

      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
