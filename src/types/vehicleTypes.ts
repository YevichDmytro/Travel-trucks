type gallery = {
  url: string;
  alt?: string;
};
type reviews = {
  userId: string;
  comment: string;
  rating: number;
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

export type FetchAllResponse = {
  items: Vehicle[];
  total: number;
}