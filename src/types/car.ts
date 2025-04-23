
export type Car = {
  id: number;
  name: string;
  category: string;
  image: string;
  transmission: 'automatic' | 'manual';
  fuel: 'petrol' | 'diesel' | 'hybrid' | 'electric';
  hasAC: boolean;
  passengers: number;
  pricePerDay: number;
};
