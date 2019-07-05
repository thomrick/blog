import { Provider } from '@nestjs/common';
import { CommandHandler } from '../../command';
import { USER_COMMAND_HANDLERS_TOKEN } from './user-command-handlers.provider';

export const COMMAND_HANDLERS_TOKEN: string = 'CommandHandlers';

export const CommandHandlersProvider: Provider = {
  provide: COMMAND_HANDLERS_TOKEN,
  useFactory: (users: CommandHandler[]): CommandHandler[] => {
    return users;
  },
  inject: [
    USER_COMMAND_HANDLERS_TOKEN,
  ],
};
