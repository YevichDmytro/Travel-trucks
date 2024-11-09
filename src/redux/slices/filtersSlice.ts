import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers } from '../operations';

interface FiltersState {
  location: string;
}

const filtersInitialState: FiltersState = {
  location: '',
};

const handlePending = state => {
  state.loading = true;
};

const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.location = action.payload;
      })
      .addCase(fetchAllCampers.rejected, handleError),
});

export const filtersReducer = filtersSlice.reducer;
