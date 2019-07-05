import { forwardRef, Module } from '@nestjs/common';
import { RepositoriesModule } from '../infra/adapters/repositories';
import { CommandHandlers, UserCommandHandlersProvider } from './providers';

@Module({
  imports: [
    forwardRef(() => RepositoriesModule),
  ],
  providers: [
    CommandHandlers,
    UserCommandHandlersProvider,
  ],
  exports: [
    CommandHandlers,
  ],
})
export class CommandModule {}
