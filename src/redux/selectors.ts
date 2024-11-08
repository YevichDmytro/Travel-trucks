import { VehicleSelectorType } from '../types/vehicleTypes';

export const selectVehicles = (state: VehicleSelectorType) => state.vehicles.items;
