import { Controller, ParseIntPipe } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findCarById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      car: body,
      ok: true,
      method: 'POST',
      message: 'a car was created',
    };
  }
  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    // Actualizar en base de datos.
    // const cars = this.updateCar(body, id);
    // const cars = this.updateCar(body, id);
    console.log(id);

    return {
      body,
      id,
      ok: true,
      method: 'PATCH',
      message: 'a car was edited',
    };
  }
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
      ok: true,
      method: 'DELETE',
      message: 'a car was deleted',
    };
  }
}
