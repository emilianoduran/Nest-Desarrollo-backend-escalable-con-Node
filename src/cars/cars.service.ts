import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/cars.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Civic',
    // },
  ];

  public findAll() {
    return this.cars;
  }
  public findOneById(id: string) {
    const car = this.cars.find((car: Car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: ${id} not found`); // Envia la excepción de NEST.
    return car;
  }

  public updateCarById(id: number, payload: Car) {
    this.cars = [...this.cars, { id: id, ...payload }];
    return this.cars;
  }

  create(createCarDto: CreateCarDto) {
    // Añade un nuevo carro
    const newCar = { ...createCarDto, id: uuid() };
    console.log(newCar);
    this.cars.push(newCar);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Car id es not valid inside body');

    const index = this.cars.findIndex((car) => car.id === id);
    carDB = {
      ...carDB,
      ...updateCarDto,
      id,
    };
    this.cars[index] = carDB;
    return carDB;
  }
  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return {
      ok: true,
      message: `This car id:${id} was deleted`,
    };
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
