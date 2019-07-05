import { Provider } from '@nestjs/common';
import { CreateUserCommandHandler } from '../../command';
import { UserRepository } from '../../domain';
import { CommandBus } from '../../infra';
import { USER_REPOSITORY_TOKEN } from './users.repository';

export const USER_COMMAND_BUS_TOKEN: string = 'UserCommandBus';

export const UsersCommandBus: Provider = {
  provide: USER_COMMAND_BUS_TOKEN,
  useFactory: (repository: UserRepository) => {
    return new CommandBus([
      new CreateUserCommandHandler(repository),
    ]);
  },
  inject: [ USER_REPOSITORY_TOKEN ],
};
