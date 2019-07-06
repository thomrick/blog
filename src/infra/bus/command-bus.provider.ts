import { Provider } from '@nestjs/common';
import { COMMAND_HANDLERS_TOKEN, CommandHandler } from '../../command';
import { CommandBus } from './command-bus';
import { InMemoryCommandBus } from './in-memory';

export const COMMAND_BUS_TOKEN: string = 'CommandBus';

export const CommandBusProvider: Provider = {
  provide: COMMAND_BUS_TOKEN,
  useFactory: (handlers: CommandHandler[]): CommandBus => {
    return new InMemoryCommandBus(handlers);
  },
  inject: [
    COMMAND_HANDLERS_TOKEN,
  ],
};
