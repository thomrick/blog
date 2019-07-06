import { Module } from '@nestjs/common';
import { ApiModule } from './api';
import { CommandModule } from './command';
import { AdaptersModule } from './infra/adapters';
import { BusModule } from './infra/bus';

@Module({
  imports: [
    AdaptersModule,
    CommandModule,
    BusModule,
    ApiModule,
  ],
})
export class AppModule {}
