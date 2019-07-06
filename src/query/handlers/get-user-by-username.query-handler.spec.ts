import { UserAggregate, UserRepository } from '../../domain';
import { GetUserByUsernameQuery } from '../queries';
import { GetUserByUsernameResult } from '../results';
import { GetUserByUsernameQueryHandler } from './get-user-by-username.query-handler';

describe('GetUserByUsernameQueryHandler', () => {
  const email: string = 'email';
  const password: string = 'password';
  const username: string = 'username';

  it('should get user by username from repository', () => {
    const user: UserAggregate = UserAggregate.with(email, password, username);
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn(),
      findByUsername: jest.fn().mockReturnValue(user),
      findByEmail: jest.fn(),
    };
    const handler = new GetUserByUsernameQueryHandler(repository);

    const result: GetUserByUsernameResult = handler.handle(new GetUserByUsernameQuery(user.getUsername()));

    expect(repository.findByUsername).toHaveBeenCalledWith(user.getUsername());
    expect(result).toEqual(new GetUserByUsernameResult(user));
  });
});
