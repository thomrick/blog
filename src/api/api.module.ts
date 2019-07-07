import { Module } from '@nestjs/common';
import { ResourcesModule } from './resources';

@Module({
  imports: [
    ResourcesModule,
  ],
})
export class ApiModule {}
