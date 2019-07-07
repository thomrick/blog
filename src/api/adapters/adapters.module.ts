import { Module } from '@nestjs/common';
import { BusModule } from './bus';
import { CommandModule } from './command';
import { QueryModule } from './query';
import { RepositoriesModule } from './repositories';

@Module({
  imports: [
    BusModule,
    CommandModule,
    QueryModule,
    RepositoriesModule,
  ],
  exports: [
    BusModule,
  ],
})
export class AdaptersModule {}
