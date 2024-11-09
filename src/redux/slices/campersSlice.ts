import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchCampersByFilters } from '../operations';
import { FetchAllResponse, CampersState } from '../../types/campersTypes';

const campersInitialState: CampersState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const pendingHandle = (state: CampersState) => {
  state.loading = true;
};

const rejectedHandle = (state: CampersState, action: any) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  reducers: {
    clearCampers: state => {
      state.items = [];
      state.total = 0;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCampers.pending, pendingHandle)
      .addCase(
        fetchAllCampers.fulfilled,
        (state: CampersState, action: PayloadAction<FetchAllResponse>) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload.items;
          state.total = action.payload.total;
        }
      )
      .addCase(fetchAllCampers.rejected, rejectedHandle)
      .addCase(fetchCampersByFilters.pending, pendingHandle)
      .addCase(fetchCampersByFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampersByFilters.rejected, rejectedHandle),
});

export const { clearCampers } = campersSlice.actions;

const campersReducer = campersSlice.reducer;
export default campersReducer;
