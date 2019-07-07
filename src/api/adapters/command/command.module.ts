import { forwardRef, Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories';
import { CommandHandlersProvider } from './command-handlers.provider';

@Module({
  imports: [
    forwardRef(() => RepositoriesModule),
  ],
  providers: [
    CommandHandlersProvider,
  ],
  exports: [
    CommandHandlersProvider,
  ],
})
export class CommandModule {}
