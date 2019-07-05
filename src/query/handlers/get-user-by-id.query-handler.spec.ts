import { UserAggregate, UserRepository } from '../../domain';
import { GetUserByIdQuery } from '../queries';
import { GetUserByIdResult } from '../results';
import { GetUserByIdQueryHandler } from './get-user-by-id.query-handler';

describe('GetUserByIdQueryHandler', () => {
  it('should get user by id from repository', () => {
    const user: UserAggregate = UserAggregate.with('username');
    const repository: UserRepository = {
      save: jest.fn(),
      get: jest.fn().mockReturnValue(user),
      findByUsername: jest.fn(),
    };
    const handler = new GetUserByIdQueryHandler(repository);

    const result: GetUserByIdResult = handler.handle(new GetUserByIdQuery(user.getId()));

    expect(repository.get).toHaveBeenCalledWith(user.getId());
    expect(result.getData()).toEqual(user);
  });
});
