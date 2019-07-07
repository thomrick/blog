import { Module } from '@nestjs/common';
import { ApiModule } from './api';
import { InfraModule } from './infra';

@Module({
  imports: [
    InfraModule,
    ApiModule,
  ],
})
export class AppModule {}
