import { Provider } from '@nestjs/common';
import { CommandHandler } from '../handlers';
import { USER_COMMAND_HANDLERS_TOKEN } from './user-command-handlers.provider';

export const COMMAND_HANDLERS_TOKEN: string = 'CommandHandlers';

export const CommandHandlers: Provider = {
  provide: COMMAND_HANDLERS_TOKEN,
  useFactory: (users): CommandHandler[] => {
    return [
      ...users,
    ];
  },
  inject: [
    USER_COMMAND_HANDLERS_TOKEN,
  ],
};
