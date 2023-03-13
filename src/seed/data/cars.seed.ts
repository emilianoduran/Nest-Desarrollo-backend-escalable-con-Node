/* eslint-disable prettier/prettier */

import { Car } from 'src/cars/interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'toyota', model: 'corolla' },
  { id: uuid(), brand: 'ram', model: '1500 lumiere' },
  { id: uuid(), brand: 'ram', model: '2500 lumiere' },
  { id: uuid(), brand: 'vW', model: 'amarok' },
  { id: uuid(), brand: 'honda', model: 'civic' },
  { id: uuid(), brand: 'peugeot', model: '208' },
  { id: uuid(), brand: 'jeep', model: 'cherokee' },
];
