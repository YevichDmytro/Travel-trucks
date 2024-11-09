import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FormFiltersType } from '../types/objFiltersTypes';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchFilteredCampers = createAsyncThunk(
  'filteredCampers/fetchFilteredCampers',
  async (filters: FormFiltersType, thunkAPI) => {
    const createQueryString = (filters: FormFiltersType) => {
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

    try {
      const response = await axios.get(
        `/campers?${createQueryString(filters)}`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue('Unknown error occurred');
    }
  }
);

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
