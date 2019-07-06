import { forwardRef, Module } from '@nestjs/common';
import { InfraModule } from '../infra';
import { QueryHandlers, UserQueryHandlers } from './providers';

@Module({
  imports: [
    forwardRef(() => InfraModule),
  ],
  providers: [
    QueryHandlers,
    UserQueryHandlers,
  ],
  exports: [
    QueryHandlers,
  ],
})
export class QueryModule {}
