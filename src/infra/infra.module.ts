import { Module } from '@nestjs/common';
import {
  CommandBusProvider,
  CommandHandlersProvider,
  UserCommandHandlersProvider,
  UserRepositoryProvider,
} from './providers';

@Module({
  providers: [
    CommandBusProvider,
    CommandHandlersProvider,
    UserCommandHandlersProvider,
    UserRepositoryProvider,
  ],
  exports: [
    CommandBusProvider,
  ],
})
export class InfraModule {}
