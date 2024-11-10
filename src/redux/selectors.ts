import { CampersSelectorType } from '../types/campersTypes';
import { RootState } from './store';

export const selectCampers = (state: CampersSelectorType) =>
  state.campers.items;

export const selectFilters = (state: RootState) => state.filters;

export const selectCurrentPage = state => state.campers.page;

export const selectLimitItems = state => state.campers.limit;

export const selectTotalItems = state => state.campers.total;

export const selectIsLoading = state => state.campers.loading;

export const selectIsError = state => state.campers.error;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
