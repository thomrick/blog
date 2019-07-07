import { Module, forwardRef } from '@nestjs/common';
import { QueryBusProvider } from './query-bus.provider';
import { QueryModule } from '../query';

@Module({
  imports: [
    forwardRef(() => QueryModule),
  ],
  providers: [
    QueryBusProvider,
  ],
  exports: [
    QueryBusProvider,
  ]
})
export class BusModule {}
