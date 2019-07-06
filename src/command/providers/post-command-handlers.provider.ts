import { Provider } from '@nestjs/common';
import { PostRepository } from '../../domain';
import { POST_REPOSITORY_TOKEN } from '../../infra/adapters/repositories';
import { CommandHandler, CreatePostCommandHandler } from '../handlers';

export const POST_COMMAND_HANDLERS_TOKEN: string = 'PostCommandHandlers';

export const PostCommandHandlers: Provider = {
  provide: POST_COMMAND_HANDLERS_TOKEN,
  useFactory: (repository: PostRepository): CommandHandler[] => {
    return [
      new CreatePostCommandHandler(repository),
    ];
  },
  inject: [
    POST_REPOSITORY_TOKEN,
  ],
};
