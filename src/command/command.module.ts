import { forwardRef, Module } from '@nestjs/common';
import { RepositoriesModule } from '../infra/adapters/repositories';
import { CommandHandlers, CommentCommandHandlers, PostCommandHandlers, UserCommandHandlersProvider } from './providers';

@Module({
  imports: [
    forwardRef(() => RepositoriesModule),
  ],
  providers: [
    CommandHandlers,
    CommentCommandHandlers,
    PostCommandHandlers,
    UserCommandHandlersProvider,
  ],
  exports: [
    CommandHandlers,
  ],
})
export class CommandModule {}
