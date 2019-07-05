import { Provider } from '@nestjs/common';
import { CommandHandler, CreateUserCommandHandler } from '../../command';
import { UserRepository } from '../../domain';
import { USER_REPOSITORY_TOKEN } from './user-repository.provider';

export const USER_COMMAND_HANDLERS_TOKEN: string = 'UserCommandHandlers';

export const UserCommandHandlersProvider: Provider = {
  provide: USER_COMMAND_HANDLERS_TOKEN,
  useFactory: (respository: UserRepository): CommandHandler[] => {
    return [
      new CreateUserCommandHandler(respository),
    ];
  },
  inject: [ USER_REPOSITORY_TOKEN ],
};
