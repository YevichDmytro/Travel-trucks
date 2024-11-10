// export type FiltersState = {
//   location?: string;
//   AC?: boolean;
//   TV?: boolean;
//   water?: boolean;
//   bathroom?: boolean;
//   kitchen?: boolean;
//   refrigerator?: boolean;
//   microwave?: boolean;
//   gas?: boolean;
//   radio?: boolean;
//   transmission?: string;
//   form?: string;
// };

// export type InitialFormValuesType = {
//   location: string;
//   AC: string;
//   TV: string;
//   water: string;
//   bathroom: string;
//   kitchen: string;
//   refrigerator: string;
//   microwave: string;
//   gas: string;
//   radio: string;
//   transmission: string;
//   form: string;
// };

// export type ValuesForSubmitType = {
//   location: string;
//   transmission: string;
//   form: string;
//   AC: boolean;
//   TV: boolean;
//   water: boolean;
//   bathroom: boolean;
//   kitchen: boolean;
//   refrigerator: boolean;
//   microwave: boolean;
//   gas: boolean;
//   radio: boolean;
// };

export type FiltersState = {
  location?: string;
  AC?: boolean;
  TV?: boolean;
  water?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  radio?: boolean;
  transmission?: string;
  form?: string;
};

export type FormValues = {
  location: string;
  AC: boolean;
  TV: boolean;
  water: boolean;
  bathroom: boolean;
  kitchen: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  radio: boolean;
  transmission: string[];
  form: string;
};
