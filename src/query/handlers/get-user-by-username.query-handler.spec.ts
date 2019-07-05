import { UserAggregate, UserRepository } from '../../domain';
import { GetUserByUsernameQuery } from '../queries';
import { GetUserByUsernameResult } from '../results';
import { GetUserByUsernameQueryHandler } from './get-user-by-username.query-handler';

describe('GetUserByUsernameQueryHandler', () => {
  it('should get user by username from repository', () => {
    const user: UserAggregate = UserAggregate.with('username');
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn(),
      findByUsername: jest.fn().mockReturnValue(user),
    };
    const handler = new GetUserByUsernameQueryHandler(repository);

    const result: GetUserByUsernameResult = handler.handle(new GetUserByUsernameQuery(user.getUsername()));

    expect(repository.findByUsername).toHaveBeenCalledWith(user.getUsername());
    expect(result).toEqual(new GetUserByUsernameResult(user));
  });
});
