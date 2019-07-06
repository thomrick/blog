import { UserAggregate, UserRepository } from '../../domain';
import { GetUserByIdQuery } from '../queries';
import { GetUserByIdResult } from '../results';
import { GetUserByIdQueryHandler } from './get-user-by-id.query-handler';

describe('GetUserByIdQueryHandler', () => {
  const email: string = 'email';
  const password: string = 'password';
  const username: string = 'username';

  it('should get user by id from repository', () => {
    const user: UserAggregate = UserAggregate.with(email, password, username);
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn().mockReturnValue(user),
      findByUsername: jest.fn(),
      findByEmail: jest.fn(),
    };
    const handler = new GetUserByIdQueryHandler(repository);

    const result: GetUserByIdResult = handler.handle(new GetUserByIdQuery(user.getId()));

    expect(repository.get).toHaveBeenCalledWith(user.getId());
    expect(result.getData()).toEqual(user);
  });
});
