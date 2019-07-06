import { Provider } from '@nestjs/common';
import { CommentRepository } from '../../domain';
import { COMMENT_REPOSITORY_TOKEN } from '../../infra/adapters/repositories';
import { CommandHandler, CreateCommentCommandHandler } from '../handlers';

export const COMMENT_COMMAND_HANDLERS_TOKEN: string = 'CommentCommandHandlers';

export const CommentCommandHandlers: Provider = {
  provide: COMMENT_COMMAND_HANDLERS_TOKEN,
  useFactory: (repository: CommentRepository): CommandHandler[] => {
    return [
      new CreateCommentCommandHandler(repository),
    ];
  },
  inject: [
    COMMENT_REPOSITORY_TOKEN,
  ],
};
