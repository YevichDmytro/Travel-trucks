import { createSlice } from '@reduxjs/toolkit';
import { fetchFilteredCampers } from '../operations';

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
      .addCase(fetchFilteredCampers.pending, handlePending)
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.location = action.payload;
      })
      .addCase(fetchFilteredCampers.rejected, handleError),
});

export const filtersReducer = filtersSlice.reducer;
