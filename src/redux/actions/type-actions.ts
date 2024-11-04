import type { Types } from '@/types/types'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { customError } from '@/helpers/helpers'
import { API_URL } from '@/utils/constants'

import { fetchWithErrorHandling } from '../hooks'

export const getTypes = createAsyncThunk('pokemons/getTypes', async () => {
  try {
    return (await fetchWithErrorHandling(`${API_URL}/type`)) as Promise<Types[]>
  } catch (error) {
    customError(error, 'An error occurred while fetching the types')
    throw error
  }
})
