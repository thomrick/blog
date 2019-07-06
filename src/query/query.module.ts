import { forwardRef, Module } from '@nestjs/common';
import { AdaptersModule } from '../infra/adapters';
import { QueryHandlers, UserQueryHandlers } from './providers';

@Module({
  imports: [
    forwardRef(() => AdaptersModule),
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
