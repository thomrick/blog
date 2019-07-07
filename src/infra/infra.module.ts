import { Module } from '@nestjs/common';
import { AdaptersModule } from './adapters';
import { BusModule } from './bus';

@Module({
  imports: [
    AdaptersModule,
    BusModule,
  ],
  exports: [
    AdaptersModule,
    BusModule,
  ],
})
export class InfraModule {}
