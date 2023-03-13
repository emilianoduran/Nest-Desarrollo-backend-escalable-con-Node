/* eslint-disable prettier/prettier */

import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';
export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'ram',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'peugeot',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'vw',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'jeep',
    createdAt: new Date().getTime(),
  },
];
