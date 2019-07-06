import { Provider } from '@nestjs/common';
import { CommandHandler } from '../handlers';
import { COMMENT_COMMAND_HANDLERS_TOKEN } from './comment-command-handlers.provider';
import { POST_COMMAND_HANDLERS_TOKEN } from './post-command-handlers.provider';
import { USER_COMMAND_HANDLERS_TOKEN } from './user-command-handlers.provider';

export const COMMAND_HANDLERS_TOKEN: string = 'CommandHandlers';

export const CommandHandlers: Provider = {
  provide: COMMAND_HANDLERS_TOKEN,
  useFactory: (postCommandHandlers, commentCommandHandlers, userCommandHandlers): CommandHandler[] => {
    return [
      ...commentCommandHandlers,
      ...postCommandHandlers,
      ...userCommandHandlers,
    ];
  },
  inject: [
    COMMENT_COMMAND_HANDLERS_TOKEN,
    POST_COMMAND_HANDLERS_TOKEN,
    USER_COMMAND_HANDLERS_TOKEN,
  ],
};
