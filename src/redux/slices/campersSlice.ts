import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllCampers } from '../operations';
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
  reducers: {},
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
      .addCase(fetchAllCampers.rejected, rejectedHandle),
});

const campersReducer = campersSlice.reducer;
export default campersReducer;
