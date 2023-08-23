import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger : ['error', 'log', 'warn', 'debug'] // quais log vai ser printados no console
  });

app.enableCors(); // Habilitando o Cors exemplo ({desafiooneapi.com})
app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
    whitelist: true, // se o json tiver mais campos, so irá converter o que está mapeado
    forbidNonWhitelisted:false //não volta erro de forbidNo e ignora caso venha mais algum campo
  }),
);
app.setGlobalPrefix('api')//

  await app.listen(3000);
}
bootstrap();
