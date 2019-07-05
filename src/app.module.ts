import { Module } from '@nestjs/common';
import { ApiModule } from './api';
import { InfraModule } from './infra';

@Module({
  imports: [
    ApiModule,
    InfraModule,
  ],
})
export class AppModule {}
