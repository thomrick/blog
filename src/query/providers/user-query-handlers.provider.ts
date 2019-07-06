import { Provider } from '@nestjs/common';
import { UserRepository } from '../../domain';
import { USER_REPOSITORY_TOKEN } from '../../infra/adapters/repositories';
import {
  GetUserByEmailQueryHandler,
  GetUserByIdQueryHandler,
  GetUserByUsernameQueryHandler,
  QueryHandler,
} from '../handlers';

export const USER_QUERY_HANDLERS_TOKEN: string = 'UserQueryHandlers';

export const UserQueryHandlers: Provider = {
  provide: USER_QUERY_HANDLERS_TOKEN,
  useFactory: (repository: UserRepository): QueryHandler[] => {
    return [
      new GetUserByIdQueryHandler(repository),
      new GetUserByUsernameQueryHandler(repository),
      new GetUserByEmailQueryHandler(repository),
    ];
  },
  inject: [
    USER_REPOSITORY_TOKEN,
  ],
};
