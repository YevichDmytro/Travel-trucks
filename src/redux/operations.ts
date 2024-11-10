import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  selectCurrentPage,
  selectFilters,
  selectLimitItems,
} from './selectors';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAllCampers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/campers?page=1&limit=4`);

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
  'campers/fetchCampersByFilters',
  async (params, thunkAPI) => {
    const state = thunkAPI.getState();
    const filters = selectFilters(state);
    const currPage = selectCurrentPage(state);
    const perPage = selectLimitItems(state);

    const paginationParams = new URLSearchParams({
      page: currPage,
      limit: perPage,
    }).toString();
    const filterParams = new URLSearchParams(
      filters as Record<string, string>
    ).toString();

    try {
      const response = await axios.get(
        `/campers?${paginationParams}&${filterParams}`
      );

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
