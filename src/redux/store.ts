import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/campersSlice';

export const store = configureStore({
  reducer: {
    campers: vehiclesReducer,
    // filters: filtersReducer,
    // favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
