import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { filtersType } from '../types/objFiltersTypes';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAll = createAsyncThunk(
  'vehicles/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campers');
      // console.log(response.data);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);

      console.log(error);
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);

export const fetchCampersByFilters = createAsyncThunk(
  'campers/fetchByFilters',
  async (filters: filtersType, thunkAPI) => {
    try {
      const createQueryString = (filters: filtersType) => {
        const stringifiedFilters = Object.entries(filters).reduce(
          (acc, [key, value]) => {
            acc[key] = value !== undefined ? String(value) : '';
            return acc;
          },
          {} as Record<string, string>
        );
        const params = new URLSearchParams(stringifiedFilters);

        return params.toString();
      };

      const response = await axios.get(
        `/campers?${createQueryString(filters)}`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error instanceof Error)
        return thunkAPI.rejectWithValue(error.message);

      console.log(error);
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);

// export const fetchById = createAsyncThunk(
//   'vehicles/fetchById',
//   async (vehicleId, thunkAPI) => {
//     try {
//       const response = await axios.get(`/campers/${vehicleId}`);
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
