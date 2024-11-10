import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectFilters } from './selectors';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAllCampers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/campers`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchCampersByFilters = createAsyncThunk(
  'filteredCampers/fetchCampersByFilters',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const filters = selectFilters(state);
    const queryParams = new URLSearchParams(
      filters as Record<string, string>
    ).toString();

    try {
      const response = await axios.get(`/campers?${queryParams}`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);

// export const fetchById = createAsyncThunk(
//   'campers/fetchById',
//   async (vehicleId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/campers/${vehicleId}`);
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
