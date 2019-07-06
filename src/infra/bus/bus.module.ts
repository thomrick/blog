import { forwardRef, Module } from '@nestjs/common';
import { CommandModule } from '../../command';
import { QueryModule } from '../../query';
import { CommandBus } from './command.bus';
import { QueryBus } from './query.bus';

@Module({
  imports: [
    forwardRef(() => CommandModule),
    forwardRef(() => QueryModule),
  ],
  providers: [
    CommandBus,
    QueryBus,
  ],
  exports: [
    CommandBus,
    QueryBus,
  ],
})
export class BusModule {}
