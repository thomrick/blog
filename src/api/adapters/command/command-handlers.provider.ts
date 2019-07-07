import { Provider } from '@nestjs/common';
import { CommandHandler, CreatePostCommandHandler } from '../../../command';
import { PostRepository } from '../../../domain';
import { POST_REPOSITORY_TOKEN } from '../repositories';

export const COMMAND_HANDLERS_TOKEN: string = 'CommandHandlers';

export const CommandHandlersProvider: Provider = {
  provide: COMMAND_HANDLERS_TOKEN,
  useFactory: (repository: PostRepository): CommandHandler[] => {
    return [
      new CreatePostCommandHandler(repository),
    ];
  },
  inject: [
    POST_REPOSITORY_TOKEN,
  ],
};
