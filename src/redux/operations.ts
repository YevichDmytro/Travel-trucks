import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchAll = createAsyncThunk(
  'vehicles/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/campers');
      console.log(response.data);
      return response.data;
    } catch (error: unknown) {
      console.log(error);

      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

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
