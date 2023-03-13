import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from 'src/interfaces/cars.interfaces';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  public findAll() {
    return this.cars;
  }
  public findById(id: number) {
    const car = this.cars.find((car: Car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: ${id} not found`); // Envia la excepción de NEST.
    return car;
  }

  public updateCarById(id: number, payload: Car) {
    this.cars = [...this.cars, { id: id, ...payload }];
    return this.cars;
  }
}
