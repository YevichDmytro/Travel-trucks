import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllCampers } from '../operations';
import { FetchAllResponse, VehiclesState } from '../../types/vehicleTypes';

const vehiclesInitialState: VehiclesState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const pendingHandle = (state: VehiclesState) => {
  state.loading = true;
};

const rejectedHandle = (state: VehiclesState, action: any) => {
  state.loading = false;
  state.error = action.payload;
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: vehiclesInitialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchAllCampers.pending, pendingHandle)
      .addCase(
        fetchAllCampers.fulfilled,
        (state: VehiclesState, action: PayloadAction<FetchAllResponse>) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload.items;
          state.total = action.payload.total;
        }
      )
      .addCase(fetchAllCampers.rejected, rejectedHandle),
});

const vehiclesReducer = vehiclesSlice.reducer;
export default vehiclesReducer;
