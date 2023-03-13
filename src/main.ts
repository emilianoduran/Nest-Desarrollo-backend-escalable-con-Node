import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

// esta función se lanza al iniciar la aplicación

async function main() {
  /*
NestFactory.create(AppModule)
Especificar un módulo de entrada
Pasa el módulo raíz requerido para la aplicación a través del parámetro module. 
Por convención, normalmente se llama ApplicationModule. 
A partir de este módulo, Nest ensambla el grafo de dependencias y comienza el 
proceso de Inyección de Dependencias e instancia las clases necesarias para
lanzar tu aplicación.
*/
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // Validaciones globales utilizano Pipes.
    new ValidationPipe({
      whitelist: true, // elimina todo lo que no existe en createCarDto.Sólo admite la data que está definida en createCarDto
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000); // Puerto por defecto.
}
main();
