import { createAsyncThunk } from '@reduxjs/toolkit';

import { customError } from '@/helpers/helpers';
import { fetchWithErrorHandling } from '@/redux/hooks';
import type { Types } from '@/types/types';
import { API_URL } from '@/utils/config';

export const getTypes = createAsyncThunk('pokemons/getTypes', async () => {
  try {
    return (await fetchWithErrorHandling(`${API_URL}/type`)) as Promise<Types[]>;
  } catch (error) {
    customError(error, 'An error occurred while fetching the types');
    throw error;
  }
});
