import type { TypesInitialState } from '@/types/types'

import { createSlice } from '@reduxjs/toolkit'

import { getTypes } from '@/redux/actions/type-actions'

const initialState: TypesInitialState = {
  types: [],
  isLoading: false,
  error: null
}

export const typesReducer = createSlice({
  name: 'types',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTypes.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getTypes.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.types = payload
        state.error = null
      })
      .addCase(getTypes.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error
      })
  }
})

export default typesReducer.reducer
