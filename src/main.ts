import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 5002;
  const app = await NestFactory.create(AppModule);
  await app.listen(port,() => {
    console.log(`Server has started on Port ${port}`)
  });
}
bootstrap();
