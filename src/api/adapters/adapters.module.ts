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
    RepositoriesModule,
  ],
})
export class AdaptersModule {}
