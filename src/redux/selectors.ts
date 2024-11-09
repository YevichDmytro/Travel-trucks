import { CampersSelectorType } from '../types/campersTypes';

export const selectCampers = (state: CampersSelectorType) =>
  state.campers.items;
