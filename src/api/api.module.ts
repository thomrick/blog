import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters';
import { ResourcesModule } from './resources';

@Module({
  imports: [
    AdaptersModule,
    ResourcesModule,
  ],
})
export class ApiModule {}
