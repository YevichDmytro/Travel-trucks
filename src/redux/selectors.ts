import { CampersSelectorType } from '../types/campersTypes';
import { RootState } from './store';

export const selectCampers = (state: CampersSelectorType) =>
  state.campers.items;

export const selectFilters = (state: RootState) => state.filters;
