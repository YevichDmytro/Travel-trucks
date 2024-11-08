import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/vehiclesSlice';

export const store = configureStore({
  reducer: {
    vehicles: vehiclesReducer,
    // filters: filtersReducer,
    // favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
