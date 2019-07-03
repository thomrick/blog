import { Provider } from '@nestjs/common';
import { UserRepository } from '../../domain';
import { InMemoryUserRepository } from '../../infra';

export const USER_REPOSITORY_TOKEN: string = 'UserRepository';

export const UsersRepository: Provider = {
  provide: USER_REPOSITORY_TOKEN,
  useFactory: (): UserRepository => {
    return new InMemoryUserRepository();
  },
};
