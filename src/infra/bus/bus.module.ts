import { forwardRef, Module } from '@nestjs/common';
import { CommandModule } from '../../command';
import { QueryModule } from '../../query';
import { CommandBusProvider, QueryBusProvider } from './providers';

@Module({
  imports: [
    forwardRef(() => CommandModule),
    forwardRef(() => QueryModule),
  ],
  providers: [
    CommandBusProvider,
    QueryBusProvider,
  ],
  exports: [
    CommandBusProvider,
    QueryBusProvider,
  ],
})
export class BusModule {}
