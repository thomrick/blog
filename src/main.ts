import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => {
  const application: INestApplication = await NestFactory.create(AppModule);
  return application.listenAsync(process.env.PORT || 8080);
})();
