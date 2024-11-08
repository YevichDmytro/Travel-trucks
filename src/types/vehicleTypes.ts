export type gallery = {
  original: string;
  thumb: string;
};

export type reviews = {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
};

export type Vehicle = {
  AC: boolean;
  TV: boolean;
  bathroom: boolean;
  consumption: string;
  description: string;
  engine: string;
  form: string;
  gallery: gallery[];
  gas: boolean;
  height: string;
  id: string;
  kitchen: boolean;
  length: string;
  location: string;
  microwave: boolean;
  name: string;
  price: number;
  radio: boolean;
  rating: number;
  refrigerator: boolean;
  reviews: reviews[];
  tank: string;
  transmission: string;
  water: boolean;
  width: string;
};

export type VehiclesState = {
  total: number;
  items: Vehicle[];
  loading: boolean;
  error: string | null;
};

export type VehicleSelectorType = {
  vehicles: VehiclesState;
};

export type FetchAllResponse = {
  items: Vehicle[];
  total: number;
};
