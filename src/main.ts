import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const configSwaggerDocs = (app: INestApplication<any>): void => {
  const config = new DocumentBuilder()
    .setTitle('FileShare API')
    .setDescription('API for file sharing')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  configSwaggerDocs(app);

  await app.listen(3000);
}

bootstrap();
