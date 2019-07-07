import { Module } from '@nestjs/common';
import { BusModule } from './bus';
import { QueryModule } from './query';
import { RepositoriesModule } from './repositories';

@Module({
  imports: [
    BusModule,
    QueryModule,
    RepositoriesModule,
  ],
  exports: [
    BusModule,
    QueryModule,
    RepositoriesModule,
  ],
})
export class AdaptersModule {}
