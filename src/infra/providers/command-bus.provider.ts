import { Provider } from '@nestjs/common';
import { CommandHandler } from '../../command';
import { CommandBus } from '../bus';
import { COMMAND_HANDLERS_TOKEN } from './command-handlers.provider';

export const COMMAND_BUS_TOKEN: string = 'CommandBus';

export const CommandBusProvider: Provider = {
  provide: COMMAND_BUS_TOKEN,
  useFactory: (handlers: CommandHandler[]) => {
    return new CommandBus(handlers);
  },
  inject: [ COMMAND_HANDLERS_TOKEN ],
};
