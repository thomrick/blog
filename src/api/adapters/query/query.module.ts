import { Module, forwardRef } from '@nestjs/common';
import { QueryHandlersProvider } from './query-handlers.provider';
import { RepositoriesModule } from '../repositories';

@Module({
  imports: [
    forwardRef(() => RepositoriesModule),
  ],
  providers: [
    QueryHandlersProvider,
  ],
  exports: [
    QueryHandlersProvider,
  ],
})
export class QueryModule {}
