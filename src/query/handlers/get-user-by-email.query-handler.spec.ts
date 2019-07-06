import { UserAggregate, UserRepository } from '../../domain';
import { GetUserByEmailQuery } from '../queries';
import { GetUserByEmailResult } from '../results';
import { GetUserResult } from '../results/get-user.result';
import { GetUserByEmailQueryHandler } from './get-user-by-email.query-handler';
import { QueryHandler } from './query-handler';

describe('GetUserByEmailQueryHandler', () => {
  const email: string = 'email';
  const password: string = 'password';
  const username: string = 'username';

  it('should get user by email from repository', () => {
    const user = UserAggregate.with(email, password, username);
    const repository: UserRepository = {
      findByEmail: jest.fn().mockReturnValue(user),
      findByUsername: jest.fn(),
      get: jest.fn(),
      save: jest.fn(),
    };
    const handler: QueryHandler = new GetUserByEmailQueryHandler(repository);

    const result: GetUserResult = handler.handle(new GetUserByEmailQuery(user.getEmail()));

    expect(repository.findByEmail).toHaveBeenCalledWith(user.getEmail());
    expect(result).toEqual(new GetUserByEmailResult(user));
  });
});
